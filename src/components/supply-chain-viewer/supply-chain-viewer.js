import Consts from "../../common/const"
var Converter = require('@iota/converter');


export default {
  props: ["root"],
  data: function() {
    return {
      details: false,
      showModal: false,
    }
  },
  methods: {
    // TODO: Refactor fetchChannel (Mixin)
    async fetchChannel(root, mode) {
      console.log(`Fetch channel:\nRoot ${root}\nmode ${mode}\n`)
      const result = await Mam.fetch(root, mode)
      console.log(`Success: ${result.messages.length} messages fetched`)
      let messages = []
      for (const i in result.messages) {
        messages.push(Converter.trytesToAscii(result.messages[i]))
      }
      return messages
    },
    async parse() {
      console.log("SupplyChainRoot: " + this.root)
      const states = await this.fetchChannel(this.root, Consts.IOTA_MAM_MODE)
      console.log( states)

      let nodes = []
      let edges = []

      for(let i = 0; i < states.length; i++){
        console.log(JSON.parse(states[i]).method)
        if(states[i].method === "create") {
          nodes.push({})
        }
      }
    }
  }
}
