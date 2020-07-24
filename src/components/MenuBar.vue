<template>
  <div class="wrapper">
    <div class="btn-group btn-group-toggle item" data-toggle="buttons">
      <label class="btn btn-secondary ">
        <input type="radio" v-model="dry_mode"> on
      </label>
      <label class="btn btn-secondary">
        <input type="radio" v-model="dry_mode"> off
      </label>
    </div>
    <div class="btn-group btn-group-toggle item" data-toggle="buttons">
      <label class="btn">
        <input type="radio" v-model="channel_mode"> public
      </label>
      <label class="btn">
        <input type="radio" v-model="channel_mode"> private
      </label>
    </div>
    <div class="item">
      <button v-on:click=openOnTangleExplorer type="button" class="btn btn-secondary" >Verify</button>
    </div>
  </div>
</template>

<script>
  export default{
    data: function() {
      return {
        dry_mode: "",
        channel_mode: "",
      }
    },
    methods: {
      openOnTangleExplorer: function() {
        const target = this.$parent.twins[this.$parent.activeItem]
        const mode = 'public'
        const provider = 'https://nodes.devnet.iota.org'
        var envURL = `https://mam-explorer.firebaseapp.com/?provider=${encodeURIComponent(provider)}&mode=${mode}&root=`
        this.rootExplURL = envURL + this.twin.root
        const link = target.rootExplrURL

        window.open(link)
      }
    }
  }
</script>

<style scoped>

  .wrapper {
    justify-content: space-evenly;
    width:100%;
    height: 4em;
  }


  .item {
    float: left;
    width: 33%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn {
    margin-bottom: 5px;
    width: 10%;
  }

</style>
