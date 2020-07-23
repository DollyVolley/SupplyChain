<template>
  <div class="header">
    <div class="container-fluid title">
      <h1 class="display-4">Supply Chain Simulator</h1>
      <h1 class="git_link">
        <a>
        </a>
      </h1>

    </div>

    <div class="subtilte">
      <div class="btn-group">
        <button class="btn btn-default"><a>Simulation</a></button>
        <button class="btn btn-default"><a>Concept</a></button>
        <button class="btn btn-default"><a>About</a></button>
        <button class="btn btn-default"><a>Contact</a></button>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

  .header {
    background: #aeafaf;
    width: 100%;
  }

  li {
    width: inherit;
  }

  .btn-group {
    width: 100%;
    justify-content: space-evenly;


  }

  .btn-group .btn {
    width: 25%;


  }

  button {
    background: transparent;
    border: none;
    width:inherit;
    color: white;
  }

  button:hover {
    background: white;
    border: none;
    color: #aeafaf;
  }

  .title {
    height: 13vh;
    padding-top: 0.8em;
    padding-left: 4em;
    text-align: left;
    display: flex;
    color: white;
    font-style: italic;
    font-size: 40pt;

  }
  .subtext {
    font-size: 15pt;
  }

</style>
