import Consts from "../../common/const"
import {Asset} from "../../mixins/models"
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
    // TODO: Refactor publishMessage (Mixin)
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
    // TODO: Refactor fetchChannel (Mixin)
    async fetchChannel(root, mode) {
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
      this.assetName = ""


      let mamState = Mam.init(Consts.IOTA_NODE_URL)
      let root = Mam.getRoot(mamState)

      let asset_id = this.$parent.getNextID()

      console.log("Create asset #id " + asset_id)
      let asset = Asset(asset_id, name, root, owner)

      const createMessage = {
        method: "create",
        data : asset.data,
      }

      var data = JSON.stringify(createMessage)
      var trytes = Converter.asciiToTrytes(data);

      asset.state  = this.publishMessage(mamState, trytes)
      this.$parent.twins.push(asset)

      return true
    },

    attachMeasurement:  function () {
      let asset = this.$parent.getAssetByID(this.$parent.activeItemID)
      const payload = this.assetMeasurementValue

      this.assetMeasurementValue = ""


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

      if (!payload) {
        console.error("Please enter a measure")
        alert("\"A measure would be nice!")
        return 1
      }
      if (!this.$parent.actingAs) {
        console.error("Choose who you want to act as")
        alert("Choose who you want to act as")
        return 1
      }

      let payload_data = {}

      if (asset.data.data_points) {
        payload_data = {
          value: payload,
          time_stamp: new Date().toLocaleString()
        }
        asset.data.data_points.push(payload_data)
      }else {
        console.log("This Should not be called")
        asset.data["data_points"] = payload_data
      }

      const stateUpdate = {
        method : "attach",
        data : payload_data,
      }

      const data = JSON.stringify(stateUpdate)
      const trytes = Converter.asciiToTrytes(data);

      asset.state = this.publishMessage(asset.state, trytes)
      this.$parent.setAssetByID(asset.id, asset)
    },

    requestAsset: function () {
      let selectedID = this.$parent.activeItemID
      let assetOriginalRoot = this.originAssetRoot
      let assetTwin = this.$parent.getAssetByID(selectedID)

      this.originAssetRoot = ""


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

          this.$parent.setAssetByID(selectedID, assetTwin)
        }
      })
    },

    approveTransfer () {
      let selectedID= this.$parent.activeItemID
      let assetOriginal = this.$parent.getAssetByID(selectedID)
      let assetTargetRoot = this.targetAssetRoot

      this.targetAssetRoot = ""

      if (assetOriginal == null) {
        console.error("Please select the asset you want to transfer!")
        alert("\"Please select the asset you want to transfer!")
        return 1
      }

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

          let targetAsset = this.$parent.getAssetByRoot(assetTargetRoot)

          targetAsset.pending = false
          assetOriginal.terminated = true
          assetOriginal.state = this.publishMessage(assetOriginal.state, trytes)

          this.$parent.setAssetByID(selectedID, assetOriginal)
          this.$parent.setAssetByID(targetAsset.id, targetAsset)
          console.log("done")
        }
      })
    }
  }
}
