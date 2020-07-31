<template>
  <div class="container-fluid">
    <div>
      <b-row>
        <b-col>
          <div class="owner container">
            <div class="title">
              <h3>Own Assets</h3>
            </div>
            <app-twincard class="float"
                          v-for="item in ownerAssets"
                          v-bind:twin="item"
                          v-bind:key="item.id"
                          :class="{active: item.id === $parent.activeItemID}"
            ></app-twincard>
          </div>
        </b-col>
        <b-col>
          <div class="other container">
            <div class="title">
              <h3>Other Assets</h3>
            </div>
            <app-twincard class="float"
                          v-for="item in otherAssets"
                          v-bind:twin="item"
                          v-bind:key="item.id"
                          :class="{active: item.id === $parent.activeItemID}"
            ></app-twincard>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script lang="js" src="./dashboard.js"></script>

<style scoped lang="css" src="./dashboard.css"></style>
