<template>
  <div>
    <div class="title">Controller</div>
      <div class="list-group">
        <div class="list-group-item card">
          <h3>Create Twin</h3>
          <label>Name:</label>
          <br>
          <input type="text"  v-model="twinNameInput" placeholder="Rocket #42" v-on:keyup.enter="createTwin">
          <br>
          <button v-on:click="createTwin" >Create Twin</button>
        </div>
        <div class="list-group-item card">
          <h3>Attach Measurement</h3>
          <label>Capacity [mAh]:</label>
          <br>
          <input type="text"  v-model="twinMeasurementInput" placeholder="243.76" v-on:keyup.enter="attachMeasurement">
          <br>
          <button v-on:click="attachMeasurement" >Attach Measurement</button>
        </div>
        <div class="list-group-item card">
          <h3>Create Transfer Request</h3>
          <label>Root of twin:</label>
          <br>
          <input type="text"  v-model="twinTransferRequestInput" placeholder="DYBVDOBVTIRLM....." v-on:keyup.enter="createTwin" class="right">
          <br>
          <button v-on:click="createTwin" >Request Transfer</button>
        </div>
        <div class="list-group-item card">
          <h3>Approve Transfer</h3>
          <br>
          <label>Root of new owner:</label>
          <br>
          <input type="text"  v-model="twinTransferAcceptInput" placeholder="DYBVDOBVTIRLM....." v-on:keyup.enter="createTwin" class="right">
          <br>
          <button v-on:click="createTwin" >Approve Transfer</button>
        </div>
      </div>
  </div>
</template>

<script>
import Consts from "../common/const"
const Converter = require('@iota/converter/out/converter/src/index.js')
console.log(Converter)

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
          root: root,
          name: name,
          owner: owner,
          create_date: new Date().toISOString().split('T')[0]
      }

      const trytes = Converter.tritsToBytes(JSON.stringify(twin))
      const message = Mam.create(mamState, trytes)

      // Save new mamState
       twin.mamState = message.state

      // Attach the payload
      Mam.attach(message.payload, message.address, 3, 9)
      .then(
        console.log('Published', packet, '\n')
      )
      this.$parent.twins.push(twin)
      return true
      },

  attachMeasurement: function() {
    let twin = this.$parent.activeItem

    const trytes = Converter.tritsToBytes(JSON.stringify(packet))
    const message = Mam.create(mamState, trytes)

    // Save new mamState
    let mamState = message.state

    // Attach the payload
    Mam.attach(message.payload, message.address, 3, 9)
    .then(
      console.log('Published', packet, '\n')
    )

      return message.root
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
