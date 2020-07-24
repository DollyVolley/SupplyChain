<template>
  <div id="app">
    <app-header class="header"></app-header>
    <div class="container-fluid">

      <app-menu-bar class="bar-menu"></app-menu-bar>
      <div class="main-window">
        <app-twin-overview class="container overview"></app-twin-overview>
        <app-controller class="container controller"></app-controller>
      </div>
      <app-concept></app-concept>
      <app-about></app-about>
      <app-contact></app-contact>
      <app-footer></app-footer>
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
  height: 100vh;
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


</style>


