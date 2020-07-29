
export default {
  props: ["twin"],
  data: function() {
    return {
      details: false,
    }
  },
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
    copyRoot () {
      let testingCodeToCopy = document.querySelector('#testing-code')
      testingCodeToCopy.setAttribute('type', 'text')    // 不是 hidden 才能複製
      testingCodeToCopy.select()

      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        alert('Testing code was copied ' + msg);
      } catch (err) {
        alert('Oops, unable to copy');
      }

      /* unselect the range */
      testingCodeToCopy.setAttribute('type', 'hidden')
      window.getSelection().removeAllRanges()
    },
  }

}
