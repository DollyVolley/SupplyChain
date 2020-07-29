<template>
    <div class="wrapper">
      <div class="mainconent" :class="{pending: twin.pending, terminated: twin.terminated}" v-on:click="select(twin.id)">
        <div class="head">
          <h4 v-if="twin.pending"><b-badge>Pending</b-badge></h4>
          <h4 v-if="twin.terminated"><b-badge>Terminated</b-badge></h4>
          <p class="name">{{ twin.data.name }}</p>
        </div>

        <div class="row">
          <div class="column">
            <p class="meta">OID: </p>
            <p class="meta">Owner: </p>
            <p class="meta" id="label_oid" data-toggle="tooltip" v-if="twin.data.prev_owner !== null">From: </p>
            <p class="meta">Date: </p>
          </div>

          <div class="column">
            <p class="meta">{{ twin.id }}</p>
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
</template>

<script lang="js" src="./twincard.js"></script>

<style lang="css" src="./twincard.css" scoped></style>
