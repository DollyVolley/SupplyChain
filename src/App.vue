<template>
  <div id="app">
    <app-header class="header"></app-header>
    <div class="container-fluid">
      <div class="simulatorMenu">
        <div class="simulatorMenuItem">Acting as:
          <select v-model="actingAs">
            <option disabled value="">Choose a party:</option>
            <option>Supplier</option>
            <option>Producer</option>
            <option>Customer</option>
          </select>
        </div>
      </div>
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
    }
  }
}
</script>


<style>

div {
  font-family: "Gill Sans Extrabold", Helvetica, sans-serif
}

.header {
  height: 16.5vh;
  display: inline-block;
}

.main-window {
  height: 100vh;
}

.simulatorMenu {
  padding: 1em 0;
  display:flex;
  justify-content: center;

}

.simulatorMenuItem {
  width: 20%;
  float:left;
}

.overview {
  float:left;
  display:inline;
  width: 60%;
}

.controller {
  width: 30%;
  float: right;
  display: grid;

  border: black 4px;
}


</style>
