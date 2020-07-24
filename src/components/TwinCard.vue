<template>
    <div class="wrapper">

      <div class="head">
        <p class="name">{{ twin.name }}</p>
      </div>

      <div class="row">
        <div class="column">
          <p class="meta">Owner: </p>
          <p class="meta">Creation Date: </p>
        </div>

        <div class="column">
          <p class="meta">{{ twin.data.owner }}</p>
          <p class="meta">{{ twin.data.create_date }}</p>
        </div>
      </div>

      <div class="" v-for="metric in twin.data.measurements">
        {{ metric }}
      </div>

      <div class="bottom">
          <button  class="bottom" v-on:click=copyToClipboard>
          <div class="root-container">
            <p class="meta2">Root:</p>
            <p class="root">{{ twin.root }}</p>
          </div>
        </button>
      </div>

    </div>
</template>

<script>
export default {
    props: ["twin"],
  data: function() {
      return {
        rootExplrURL:""
      }
  },
  methods: {

    copyToClipboard: function() {

    }
  }
}
</script>

<style scoped>

  .wrapper {
    width: 250px;
    flex: auto;
    border-style: solid;
    border-color: #5e5e5e;
  }

  .head {
    text-align: center;
  }

  .column {
    float: left;
    width: 50%;
  }

  .row {
    width: 100%;
    padding: 10px;
    margin: 0;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  .meta {
    font-size: 10pt;
    margin-bottom: 5px;
  }

  .meta2 {
    font-size: 10pt;
    margin: 0 auto;
  }

  .bottom {
    color:white;
    background: #5e5e5e;
    padding:0;
    margin:0;
    width: 100%;
  }

  .imgbtn . {
    width: 50%;
  }
  .root {
    font-size: 7pt;
    word-wrap: break-word;
    margin: 0;
  }


</style>
