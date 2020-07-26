<template>
  <div class="wrapper">
    <hr>

    <div Style="clear:both"></div>
    <div class="simulatorMenuItem">
      <select class="selecto" v-model="$parent.actingAs">
        <option  disabled value="">Choose your actor!</option>
        <option>Supplier</option>
        <option>Producer</option>
        <option>Customer</option>
      </select>
    </div>
    <div Style="clear:both"></div>
    <div class="tangleexplorer">
      <label>Track asset with </label>
      <button v-on:click=openOnTangleExplorer type="button" class="btn-outline-primary btn btn-sm"
      title="Select a asset to verificate it on ...">Tangle Explorer</button>
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
        const twin = this.$parent.twins[this.$parent.activeItem]
        const mode = 'public'
        const provider = 'https://nodes.devnet.iota.org'
        var envURL = `https://mam-explorer.firebaseapp.com/?provider=${encodeURIComponent(provider)}&mode=${mode}&root=`
        console.log(envURL)
        console.log(twin.root)

        const link = envURL + twin.root
        console.log(link)
        window.open(link)
      }
    }
  }
</script>

<style scoped>

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em 0 0;
    width:100%;
    height: 4em;
  }

  .btn {
    margin: 0;
  }

  .selecto {
    width:12em;
    margin-right: 150px;
  }

  .simulatorMenuItem {
    width: 20%;
    float:left;
    margin-right: 10em;

  }

  .tangleexplorer {
    width: 50%;
    display: inline-block;
  }

</style>
