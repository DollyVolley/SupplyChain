export default {
  props: ["twin"],
  data : function(){
    return {
      dashboard: 0,
    }
  } ,
  computed: {
    ownerAssets: function() {
      let twins = this.$parent.twins
      let owned = []

      let actingAs = this.$parent.actingAs
      for (let twin of twins) {
        if (twin.data.owner === actingAs) {
          owned.push(twin)
        }
      }
      console.log("owned size: " + owned.length)
      return owned
    },

    otherAssets: function() {
      let twins = this.$parent.twins
      let other = []

      let actingAs = this.$parent.actingAs
      for (let twin of twins) {
        if (twin.data.owner !== actingAs) {
          other.push(twin)
        }
      }
      console.log("owned size: " + other.length)
      return other
    }
  }
}
