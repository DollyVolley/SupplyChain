<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid constraint">
      <div class="container">
        <h1 class="display-4">Supply Chain Simulator</h1>
        <p class="lead">Play around with digital twins. Try concepts as ownership, ownership-transfer through the channel framework!
        All states and references are stored on the Tangle. Check it out by referencing a root on: 
      </p>
      </div>
    </div>
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
.jumbotron {
  margin: 0;
}

div { 
  font-family: "Gill Sans Extrabold", Helvetica, sans-serif 
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
  width: 70%;
}

.controller {
  width: 25%;
  float: right;
  display: grid;

  border: black 4px;
}


</style>
