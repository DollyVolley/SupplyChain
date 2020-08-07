<template>
<div class="wrapper">
  <div class="head">
    <div>
      <p> {{ root }}</p>
      <b-button @click="parse()">Refresh</b-button>
    </div>
  </div>
  <div class="body">

  </div>
</div>
</template>

<script lang="js" src="./supply-chain-viewer.js"></script>

<style scoped>
  .wrapper{
    border: none;
    width: 15em;
    height: 5em;
  }
</style>
