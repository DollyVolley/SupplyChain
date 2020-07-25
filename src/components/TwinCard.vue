<template>
    <div class="wrapper">

      <div class="head">
        <p class="name">{{ twin.data.name }}</p>
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

      <div v-if="twin.data.data_points.length" class="metrics-cont">
        <div>
          <div class="cont-left">
            <p class=key>Time</p>

          </div>
       </div>
          <div class="cont-right">
            <p class="key">Value</p>
          </div>
       </div>

      <div class="metrics-cont" v-for="metric in twin.data.data_points">
        <div>
          <div class="cont-left">
            <p class="value">{{ metric.time_stamp }}</p>
          </div>
          <div class="cont-right">
            <p class="value">{{ metric.value }}</p>
          </div>
        </div>
        <hr>
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

  .hr {
    margin-top: 5px;
  }

  .head {
    padding-top: 10px;
    text-align: center;
  }

  .column {
    float: left;
    width: 50%;
  }

  .row {
    width: 100%;
    padding: 0 0 10px 10px;
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

  .key {
    font-size: 8pt;
    margin: 0;
  }

  .value {
    font-size: 8pt;
    margin: 0;
    float:left;
  }
  .cont-left {
    width: 50%;
    margin: 0 0 0 15px;
    float:left;
  }
  .cont-right {
    width: 20%;
    margin: 0;
    float: right;
  }

  .bottom {
    color:white;
    background: #5e5e5e;
    padding:0;
    margin:0;
    width: 100%;
  }

  .root {
    font-size: 7pt;
    word-wrap: break-word;
    margin: 0;
  }



</style>
