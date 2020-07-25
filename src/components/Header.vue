<template>
  <div class="header">
    <div class="container-fluid title">
      <h1 class="title">Supply Chain Simulator</h1>
      <h1 class="git_link">
        <a>
        </a>
      </h1>
    </div>

    <div class="btn-group">
      <a href="https://dollyvolley.com/#GettingStarted"><div class="btn1">Gotting Started</div></a>
      <a href="https://dollyvolley.com/#GettingStarted"><div class="btn1">Learn more</div></a>
      <a href="https://dollyvolley.com/#About"><div class="btn1">About</div></a>
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

  a {
    margin-top: 1em;
    width: 100%;
    text-decoration: none;
    font-size: 18pt;
  }


  .btn-group {
    clear: both;
    width: 100%;
    height: 2em;

    justify-content: space-evenly;
  }

  .btn1 {
    background: #345695;

    width: 100%;
    position: relative;
    border: none;
    color: white;
    text-align: center;
  }

  .btn1:hover{
    background: transparent;
    border: none;
    color: white;
  }


  h1 {
    font-family: 'Source Sans Pro', sans-serif;
  }

  .title {
    height: 11.8vh;
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
