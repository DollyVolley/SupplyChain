<template>
  <div id="app">
    <app-header class="header"></app-header>
    <div class="container-fluid fullgas">

      <app-menu-bar id="simulation" class="bar-menu"></app-menu-bar>
      <div class="main-window">
        <app-dashboard class="container overview"></app-dashboard>
        <app-controller class="container controller"></app-controller>
      </div>
      <app-concept id="concept"></app-concept>
      <app-learn-more id="learn-more"></app-learn-more>
      <app-footer id="footer about"></app-footer>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      twins: [],
      actingAs: "Supplier",
      activeItemID: null,
      nextID: 0,
    }
  },

  methods: {
    getNextID: function() {
      let ret = this.nextID;
      this.nextID = ret + 1;
      return ret ;
    },

    setAssetByID : function(id, asset){
      for (let i = 0; i < this.twins.length; i++) {
        if (this.twins[i].id === id) {
          this.twins[i] = asset
          return 0
        }
      }
      console.error("Asset not found! ID: " + id)

    },

    getAssetByID : function (id) {
      for (let i = 0; i < this.twins.length; i++) {
        if (this.twins[i].id === id) {
          return this.twins[i]
        }
      }
      console.error("Asset not found! ID: " + id)

    },

    getAssetByRoot : function(root) {
      for (let i = 0; i < this.twins.length; i++) {
        if (this.twins[i].root === root) {
          return this.twins[i]
        }
      }
      console.error("Asset not found! Root: " + root)
    }
  }
}
</script>


<style>

div {
  font-family: "Gill Sans Extrabold", Helvetica, sans-serif
}

.header {
  height: 18vh;
  display: inline-block;
}

.main-window {
  min-height: 1100px;
}

.overview {
  float:left;
  display:inline;
  width: 75%;
}

.controller {
  width: 25%;
  float: right;
  display: grid;
  border: black 4px;
}

#concept {
  width: 100%;
  min-height:1500px;
}

.fullgas {
  padding: 0;
}

a {
  color:inherit;
  text-decoration: none;
}


</style>


