<template>
  <div id="app">
    <app-header class="header"></app-header>
    <div class="container-fluid fullgas">

      <app-menu-bar id="simulation" class="bar-menu"></app-menu-bar>
      <div class="main-window">
        <app-twin-overview class="container overview"></app-twin-overview>
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
      twinNameInput: "",
      actingAs: "",
      activeItem: null
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
  width: 70%;
}

.controller {
  width: 30%;
  float: right;
  display: grid;
  border: black 4px;
}

#concept {
  width: 100%;
  min-height:1700px;
}

.fullgas {
  padding: 0;
}

a {
  color:inherit;
  text-decoration: none;
}


</style>


