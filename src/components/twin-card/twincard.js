
export default {
  props: ["twin"],
  methods: {
    select: function(id) {
      console.debug("Selected twin Index: " + id)
      let asset = this.$parent.$parent.getAssetByID(id)
      if(asset.pending || asset.terminated)  {
        console.error("Object pending, can not select it")
        return 1
      }
      this.$parent.$parent.activeItemID = id;
    },
  }

}
