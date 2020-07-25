<template>
  <div class="header">
    <div class="container-fluid title">
      <h1 class="title">Supply Chain Simulator</h1>
      <h1 class="git_link">
        <a>
        </a>
      </h1>

    </div>

    <div class="subtilte">
      <div class="btn-group">
        <button class="btn btn-default"><a href="https://dollyvolley.com/#Simulation">Simulation</a></button>
        <button class="btn btn-default"><a href="https://dollyvolley.com/#GettingStarted">Getting Started</a></button>
        <button class="btn btn-default"><a href="https://dollyvolley.com/#About">About</a></button>
        <button class="btn btn-default"><a href="https://dollyvolley.com/#Contact">Contact</a></button>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

  .header {
    background: #578AFE;
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

  h1 {
    font-family: 'Source Sans Pro', sans-serif;
  }

  button {
    background: #4060AB;
    border: none;
    width:inherit;
    color: white;
  }

  button:hover {
    background: transparent;
    border: none;
    color: white;
  }

  .title {
    height: 13vh;
    padding-top: 0.4em;
    padding-left: 2em;
    text-align: left;
    display: flex;
    color: white;
    font-size: 40pt;
  }
  .subtext {
    font-size: 15pt;
  }

</style>
