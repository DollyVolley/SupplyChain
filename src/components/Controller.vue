<template>
  <div>
      <div class="list-group">
        <div class="list-group-item card">
          <h3>Create Twin <div class="info-bar"><a href="https://dollyvolley.com/#learn-more"><p>?</p></a></div></h3>
          <label>Name:</label>
          <br>
          <input type="text" v-model="assetName" placeholder="Rocket #42" v-on:keyup.enter="createTwin">
          <br>
          <button v-on:click="createTwin" class="btn-outline-primary btn btn-sm">Create Twin</button>
        </div>
        <div class="list-group-item card">
          <h3>Attach Measurement <div class="info-bar"><a href="https://dollyvolley.com/#learn-more"><p>?</p></a></div></h3>
          <label>Capacity [mAh]:</label>
          <br>
          <input type="text" v-model="assetMeasurementValue" placeholder="243.76" v-on:keyup.enter="attachMeasurement">
          <br>
          <button v-on:click="attachMeasurement" class="btn-outline-primary btn btn-sm">Attach Measurement</button>
        </div>
        <div class="list-group-item card">
          <h3>Request Transfer [TODO] <div class="info-bar"><a href="https://dollyvolley.com/#learn-more"><p>?</p></a></div></h3>
            <p>Please select the prepared receiver object!<p></p>
          <br>
          <input type="text" v-model="originAssetRoot" placeholder="DYBVDOBVTIRLM....." v-on:keyup.enter="createTwin" class="right">
          <br>
          <button v-on:click="requestAsset" class="btn-outline-primary btn btn-sm">Request Transfer</button>
        </div>
        <div class="list-group-item card">
          <h3>Approve Transfer [TODO] <div class="info-bar"><a href="https://dollyvolley.com/#learn-more"><p>?</p></a></div></h3>
          <br>
          <label>Root of new owner:</label>
          <br>
          <input type="text" v-model="targetAssetRoot" placeholder="DYBVDOBVTIRLM....." v-on:keyup.enter="createTwin" class="right">
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
      assetName: '',
      assetMeasurementValue: '',
      originAssetRoot: '',
      targetAssetRoot: '',
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

      let name = this.assetName
      if (!name) {
        console.error("No name typed!")
        alert("Twins also deserve names! Please type one.")
        return 1
      }

      let mamState = Mam.init(Consts.IOTA_NODE_URL)
      let root = Mam.getRoot(mamState)

      let asset = {
        state: null,
        root: root,
        data: {
          name: name,
          owner: owner,
          data_points: [],
          create_date: new Date().toISOString().split('T')[0]
        }
      }

      const createMessage = {
        create : {
          data : asset.data,
          // Extend with parameters such as:
          // current state: as deterministic transition state condition
          // Fee:
        }
      }


      var data = JSON.stringify(createMessage)
      var trytes = Converter.asciiToTrytes(data);

      asset.state  = this.publishMessage(mamState, trytes)
      this.$parent.twins.push(asset)
      return true
    },

    attachMeasurement:  function () {
      let asset = this.$parent.twins[this.$parent.activeItem]

      if (asset == null) {
        console.error("Please select a asset!")
        alert("\"Please select a asset!")
        return 1
      }

      if (asset.data.owner !== this.$parent.actingAs) {
        console.error("Not the owner of this asset.")
        alert("\"Not allowed! Only the owner is able to see the necessary data in order to advance the state.")
        return 1
      }

      if (!this.assetMeasurementValue) {
        console.error("Please enter a measure")
        alert("\"A measure would be nice!")
        return 1
      }
      if (!this.$parent.actingAs) {
        console.error("Choose who you want to act as")
        alert("Choose who you want to act as")
        return 1
      }

      if (asset.data.data_points) {
        var data_point = {
          value: this.assetMeasurementValue,
          time_stamp: new Date().toLocaleString()
        }
        asset.data.data_points.push(data_point)
      }else {
        asset.data["data_points"] = this.assetMeasurementValue
      }

      const stateUpdate = {
        state_update : {
          data : asset.data,
        }
      }

      const data = JSON.stringify(stateUpdate)
      const trytes = Converter.asciiToTrytes(data);

      asset.state = this.publishMessage(asset.state, trytes)
      this.$parent.twins[this.$parent.actingAs] = asset

    },

    requestAsset: function() {
      let asset = this.$parent.twins[this.$parent.activeItem]

      if (asset == null) {
        console.error("Please select a asset!")
        alert("\"Please select a asset!")
        return 1
      }

      if (asset.data.owner !== this.$parent.actingAs) {
        console.error("You need to select your clone!")
        alert("\"You need to select your clone!")
        return 1
      }

      if (!this.originAssetRoot) {
        console.error("You need to provide the root of the asset you want to request!")
        alert("\"You need to provide the root of the asset you want to request!")
        return 1
      }

      const requestMessage = {
        request : {
          transfer : {
            origin: this.originAssetRoot,
            target: asset.root
          }

          // Extend with parameters such as:
          // current state: as deterministic transition state condition
          // Fee:
        }
      }
      console.log(JSON.stringify(requestMessage))

      const data = JSON.stringify(requestMessage)
      const trytes = Converter.asciiToTrytes(data);

      asset.state = this.publishMessage(asset.state, trytes)
      this.$parent.twins[this.$parent.actingAs] = asset
    }
  }
}
</script>

<style>
  button {
    margin-top: 15px;
  }

  .card {
    margin: 1em;
  }

  /* Info Bar down here*/
  a {
    font-size: 20pt;
    text-decoration: none;
    color: white;
    text-align: center;
    vertical-align: middle;
    line-height: 30px;
  }

  a:hover {
    color: white;
    text-decoration: none;
  }

  .info-bar {
    height: 30px;
    width: 30px;
    float: right;
    margin-bottom: 15px;
    background: #578AFE;
    border-radius: 20px;

  }

  .info-bar:hover{
    background: #345695;
  }


</style>
