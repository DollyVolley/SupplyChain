<template>
<div class="wrapper" style="border: none">
  <div class="head">
    <div>
      <p> {{ root }}</p>
      <b-button @click="parse()">Refresh</b-button>
    </div>
  </div>
  <div class="body">

    `<div :style="{ width: width + 'px', height: height + 'px', border: '1px solid black' }">
    <svg width="100%" height="100%">
      <defs>
        <pattern id="innerGrid" :width="innerGridSize" :height="innerGridSize" patternUnits="userSpaceOnUse">
          <rect width="100%" height="100%" fill="none" stroke="#CCCCCC7A" stroke-width="0.5"/>
        </pattern>
        <pattern id="grid" :width="gridSize" :height="gridSize" patternUnits="userSpaceOnUse">
          <rect width="100%" height="100%" fill="url(#innerGrid)" stroke="#CCCCCC7A" stroke-width="1.5"/>
        </pattern>
      </defs>
    </svg>
  </div>`

  </div>
</div>
</template>

<script lang="js" src="./supply-chain-viewer.js"></script>

<style lang="css" src="./supply-chain-viewer.css"></style>
