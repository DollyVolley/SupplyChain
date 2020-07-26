<template>
  <div>
      <div class="list-group">
        <div class="list-group-item card">
          <h3>Create Twin <div class="info-bar"><a href="https://dollyvolley.com/#CreateFirstAssetHelp"><p>?</p></a></div></h3>
          <label>Name:</label>
          <br>
          <input type="text" v-model="assetName" placeholder="Rocket #42" v-on:keyup.enter="createTwin">
          <br>
          <button v-on:click="createTwin" class="btn-outline-primary btn btn-sm">Create Twin</button>
        </div>
        <div class="list-group-item card">
          <h3>Attach Measurement <div class="info-bar"><a href="https://dollyvolley.com/#AttachMeasurementHelp"><p>?</p></a></div></h3>
          <p>Please select the asset!<p></p>
          <label>Capacity [mAh]:</label>
          <br>
          <input type="text" v-model="assetMeasurementValue" placeholder="243.76" v-on:keyup.enter="attachMeasurement">
          <br>
          <button v-on:click="attachMeasurement" class="btn-outline-primary btn btn-sm">Attach Measurement</button>
        </div>
        <div class="list-group-item card">
          <h3>Request Transfer<div class="info-bar"><a href="https://dollyvolley.com/#RequestAssetHelp"><p>?</p></a></div></h3>
            <p>Please select the prepared receiver asset!</p>
          <label>Root of  requestesd asset:</label>
          <br>
          <input type="text" v-model="originAssetRoot" placeholder="DYBVDOBVTIRLM....." v-on:keyup.enter="createTwin" class="right">
          <br>
          <button v-on:click="requestAsset" class="btn-outline-primary btn btn-sm">Request Transfer</button>
        </div>
        <div class="list-group-item card">
          <h3>Approve Transfer [TODO]<div class="info-bar"><a href="https://dollyvolley.com/#TransferAssetHelp"><p>?</p></a></div></h3>
          <p>Please select the asset you want to transfer!</p>
          <label>Root of receiver asset:</label>
          <br>
          <input type="text" v-model="targetAssetRoot" placeholder="DYBVDOBVTIRLM....." v-on:keyup.enter="createTwin" class="right">
          <br>
          <button v-on:click="approveTransfer" class="btn-outline-primary btn btn-sm">Approve Transfer</button>
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

    async fetchChannel (root, mode) {
      console.log(`Fetch channel:\nRoot ${root}\nmode ${mode}\n`)
      const result = await Mam.fetch(root, mode)
      console.log(`Success: ${result.messages.length} messages fetched`)
      let messages = []
      for (var i in result.messages) {
        messages.push(Converter.trytesToAscii(result.messages[i]))
      }
      return messages
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
        pending: false,
        terminated: false,
        data: {
          name: name,
          owner: owner,
          data_points: [],
          prev_owner: null,
          create_date: new Date().toISOString().split('T')[0]
        }
      }

      const createMessage = {
        method: "create",
        data : asset.data,
          // Extend with parameters such as:
          // current state: as deterministic transition state condition
          // Fee:
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
        method : "update",
        data : asset.data,
      }

      const data = JSON.stringify(stateUpdate)
      const trytes = Converter.asciiToTrytes(data);

      asset.state = this.publishMessage(asset.state, trytes)
      this.$parent.twins[this.$parent.actingAs] = asset

    },

    requestAsset: function () {
      let assetOriginalRoot = this.originAssetRoot
      let assetTwin = this.$parent.twins[this.$parent.activeItem]

      console.log(assetOriginalRoot)

      if (assetTwin == null) {
        console.error("Please select a asset!")
        alert("\"Please select a asset!")
        return 1
      }

      if (assetTwin.data.owner !== this.$parent.actingAs) {
        console.error("You need to select your clone!")
        alert("\"You need to select your clone!")
        return 1
      }

      if (!assetOriginalRoot) {
        console.error("You need to provide the root of the asset you want to request!")
        alert("\"You need to provide the root of the asset you want to request!")
        return 1
      }

      const requestMessage = {
        method: "transfer_request",
        params: {
          origin: assetOriginalRoot,
          target: assetTwin.root
        }
      }

      const data = JSON.stringify(requestMessage)
      const trytes = Converter.asciiToTrytes(data);
      assetTwin.state = this.publishMessage(assetTwin.state, trytes)

      let messages = this.fetchChannel(assetOriginalRoot, Consts.IOTA_MAM_MODE)
      messages.then( (messages) => {
        console.log(messages)
        let index = messages.length - 1
        let state = JSON.parse(messages[index])
        console.log(state)
        if (state.data === undefined) {
          console.log("No data found. Invalid object!")
        } else {
          console.log("Copy data to clone")
          let new_name = assetTwin.data.name
          let new_owner = assetTwin.data.owner
          assetTwin.data = state.data
          assetTwin.data.prev_owner = assetTwin.data.owner
          assetTwin.data.name = new_name
          assetTwin.data.owner = new_owner
          assetTwin.pending = true

          this.$parent.twins[this.$parent.activeItem] = assetTwin
        }
      })
    },

    approveTransfer () {
      let assetOriginal = this.$parent.twins[this.$parent.activeItem]
      let assetTargetRoot = this.targetAssetRoot

      console.log(assetOriginal)

      if (assetOriginal == null) {
        console.error("Please select the asset you want to transfer!")
        alert("\"Please select the asset you want to transfer!")
        return 1
      }

      console.log(assetOriginal.data.owner)
      console.log(this.$parent.actingAs)


      if (assetOriginal.data.owner !== this.$parent.actingAs) {
        console.error("You need to select your clone!")
        alert("\"You dont have ownership over the selected asset! In production environments you would not have it's keys.")
        return 1
      }

      if (!assetTargetRoot) {
        console.error("You need to provide the root of the target asset!")
        alert("\"You need to provide the root of the target asset!")
        return 1
      }

      let messages = this.fetchChannel(assetTargetRoot, Consts.IOTA_MAM_MODE)
      messages.then( (messages) => {
        console.log(messages)
        if (messages.length !== 2) {
          console.log("Please provide a prepared target asset")
          alert("Please provide a prepared target asset")
        }

      // Here you could do integrity checks --> both assets states would need to be equal, could also introduce errors!

        let state = JSON.parse(messages[1])
        // if one could send assets to every address / channel! binding between channels would not be bidirectional anymore!
        if (state.method !== "transfer_request") {
          console.log("Last state was not a transfer request!")
          alert("Last state was not a transfer request!")
        } else {
          console.log("Initiate Transfer")

          if (assetOriginal.root !== state.params.origin) {
            console.log("Your asset has not been requested!")
            alert("Your asset has not been requested! The origin assets root must match the origin root referenced in the request")
          }

          if (assetTargetRoot !== state.params.target) {
            console.log("This is not the target referenced in the request.")
            alert("This is not the target referenced in the request.")
          }

          const transferMessage = {
            method: "transfer",
            params: {
              origin: assetOriginal.root,
              target: assetTargetRoot
            }
          }

          const data = JSON.stringify(transferMessage)
          const trytes = Converter.asciiToTrytes(data);

          let target_index = -1
          let temp_index = 0
          console.log(assetOriginal.root)
          console.log(this.$parent.actingAs)

          for (let i = 0; i < this.$parent.twins; i++) {
            let twin = this.$parent.twins.get(i)
            console.log(JSON.stringify(twin))
            if(twin.root === assetOriginal.root) {
              console.log("Found transfer target by root")
              target_index =temp_index
            }
            temp_index += 1
          }

          let target_asset = this.$parent.twins[target_index]
          console.log(target_asset)

          target_asset.pending = false

          assetOriginal.state = this.publishMessage(assetOriginal.state, trytes)
          assetOriginal.terminated = true
          this.$parent.twins[this.$parent.activeItem] = assetOriginal
          console.log("done")
        }
      })
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
