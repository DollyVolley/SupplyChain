<template>
    <div class="wrapper">
      <div :class="{terminated: twin.terminated}">
      <div class="mainconent" :class="{pending: twin.pending}">
        <div class="head">
          <div class="status" v-if="twin.terminated">
            <p class="name" >Channel terminated</p>
          </div>
          <div class="status" v-if="twin.pending">
            <p class="name" >Request Pending</p>
          </div>
          <p class="name">{{ twin.data.name}}</p>
        </div>

        <div class="row">
          <div class="column">
            <p class="meta">Owner: </p>
            <p class="meta" v-if="twin.data.prev_owner !== null">Previous Owner: </p>
            <p class="meta">Creation Date: </p>
          </div>

          <div class="column">
            <p class="meta">{{ twin.data.owner }}</p>
            <p class="meta" v-if="twin.data.prev_owner !== null"> {{ twin.data.prev_owner }}</p>
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
      </div>

      <div class="bottom">
          <div class="root-container">
            <p class="meta2">Root:</p>
            <div class="root">{{ twin.root }}</div>
          </div>
      </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ["twin"],

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
    padding-top: 10px;
    text-align: center;
  }

  .column {
    float: left;
    width: 50%;
  }

  .row {
    width: 100%;
    padding-left: 30px;
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
    justify-content: center;
  }

  .root {
    font-size: 7pt;
    word-wrap: break-word;
    margin: 0;
  }

  .status {
    text-decoration: yellow;
  }

  .pending {
    background: #f3fa8e;
    pointer-events: none;
    padding-bottom: 10px;
  }

  .terminated {
    background: #cccccc;
    pointer-events: none;
    color: #5c5c5c;
    width: 100%;
  }



</style>
