<template>
  <div>
      <div class="list-group">
        <div class="list-group-item card">
          <h3>Create Twin</h3>
          <label>Name:</label>
          <br>
          <input type="text"  v-model="twinNameInput" placeholder="Rocket #42" v-on:keyup.enter="createTwin">
          <br>
          <button v-on:click="createTwin" class="btn-outline-primary btn btn-sm">Create Twin</button>
        </div>
        <div class="list-group-item card">
          <h3>Attach Measurement</h3>
          <label>Capacity [mAh]:</label>
          <br>
          <input type="text"  v-model="twinMeasurementInput" placeholder="243.76" v-on:keyup.enter="attachMeasurement">
          <br>
          <button v-on:click="attachMeasurement" class="btn-outline-primary btn btn-sm">Attach Measurement</button>
        </div>
        <div class="list-group-item card">
          <h3>Create Transfer Request</h3>
          <label>Root of twin:</label>
          <br>
          <input type="text"  v-model="twinTransferRequestInput" placeholder="DYBVDOBVTIRLM....." v-on:keyup.enter="createTwin" class="right">
          <br>
          <button v-on:click="createTwin" class="btn-outline-primary btn btn-sm" disabled>Request Transfer</button>
        </div>
        <div class="list-group-item card">
          <h3>Approve Transfer</h3>
          <br>
          <label>Root of new owner:</label>
          <br>
          <input type="text"  v-model="twinTransferAcceptInput" placeholder="DYBVDOBVTIRLM....." v-on:keyup.enter="createTwin" class="right">
          <br>
          <button v-on:click="createTwin" class="btn-outline-primary btn btn-sm" disabled>Approve Transfer</button>
        </div>
      </div>
  </div>
</template>

<script>
  import Consts from "../common/const"
  var Converter = require('@iota/converter');

  export default {
  data() {
    return {
      twinNameInput: '',
      twinMeasurementInput: '',
      twinTransferRequestInput: '',
      twinTransferAcceptInput: '',
    }
  },
  methods: {
    publishMessage: function (mamState, trytesMessage) {
      console.log("Commiting new State")
      var message = Mam.create(mamState, trytesMessage);
      try {
        Mam.attach(message.payload, message.address, Consts.IOTA_ATTACH_DEPTH, Consts.IOTA_ATTACH_WORK)
      } catch (err) {
        console.log("There was an error attaching the message", err);
      }
      return message.state
    },
    createTwin: function createTwin() {
      let owner = this.$parent.actingAs
      if (!owner) {
        console.error("You can not act as uNdEfiEnd *Insert Spongebob Meme*. Choose a party!")
        alert("Please choose who you are acting for!")
        return 1
      }

      let name = this.twinNameInput
      if (!name) {
        console.error("No name typed!")
        alert("Twins also deserve names! Please type one.")
        return 1
      }

      let mamState = Mam.init(Consts.IOTA_NODE_URL)
      let root = Mam.getRoot(mamState)

      let twin = {
        state: null,
        root: root,
        data: {
          name: name,
          owner: owner,
          data_points: [],
          create_date: new Date().toISOString().split('T')[0]
        }
      }

      var data = JSON.stringify(twin.data)
      var trytes = Converter.asciiToTrytes(data);

      twin.state  = this.publishMessage(mamState, trytes)
      this.$parent.twins.push(twin)
      return true
    },
    attachMeasurement:  function () {
      let twin = this.$parent.twins[this.$parent.activeItem]

      if (twin == null) {
        console.error("Please select a twin!")
        alert("\"Please select a twin!")
        return 1
      }

      if (twin.data.owner !== this.$parent.actingAs) {
        console.error("Not the owner of this asset.")
        alert("\"Not allowed! Only the owner is able to see the necessary data in order to advance the state.")
        return 1
      }

      if (!this.twinMeasurementInput) {
        console.error("Please enter a measure")
        alert("\"A measure would be nice!")
        return 1
      }
      if (!this.$parent.actingAs) {
        console.error("Choose who you want to act as")
        alert("Choose who you want to act as")
        return 1
      }


      if (twin.data.data_points) {
        var data_point = {
          value: this.twinMeasurementInput,
          time_stamp: new Date().toLocaleString()
        }
        twin.data.data_points.push(data_point)
      }else {
        twin["data_points"] = this.twinMeasurementInput
      }

      const data = JSON.stringify(twin.data)
      const trytes = Converter.asciiToTrytes(data);

      twin.state = this.publishMessage(twin.state, trytes)
      this.$parent.twins[this.$parent.actingAs] = twin

    }
  }
}
</script>

<style>

  button {
    margin-top: 15px;
  }

  .title{
      text-align: center;
      font-size: 25pt;
      padding-bottom: 1em;
  }

  .card {
      margin: 1em;
  }



</style>
