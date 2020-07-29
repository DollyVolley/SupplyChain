<template>
  <div>
    <div>
      <b-tabs content-class="mt-3" fill>
        <b-tab title="Layer 1" active>

          <b-card class="b-card">
            <div class="body">
              <h4>Create Twin <div class="info-bar"><a href="https://dollyvolley.com/#CreateFirstAssetHelp"><p>?</p></a></div></h4>
              <br>

              <label>Name: <input type="text" v-model="assetName" placeholder="Rocket #42" v-on:keyup.enter="createTwin"></label>
                <br>
               <button v-on:click="createTwin" class="btn-outline-primary btn btn-sm">Create Twin</button>
            </div>
            </b-card>

            <b-card class="card">
              <div class="body">
                <h4>Attach Measurement <div class="info-bar"><a href="https://dollyvolley.com/#AttachMeasurementHelp"><p>?</p></a></div></h4>
                <p>Please select the <span class="greenText">target asset</span>!<p></p>
                <label>Value: <input type="text" v-model="assetMeasurementValue" placeholder="243.76" v-on:keyup.enter="attachMeasurement" class="right"></label>

                <br>
                <button v-on:click="attachMeasurement" class="btn-outline-primary btn btn-sm">Attach Measurement</button>
              </div>
            </b-card>

            <b-card class="card">
              <h4>Request Transfer<div class="info-bar"><a href="https://dollyvolley.com/#RequestAssetHelp"><p>?</p></a></div></h4>
              <div class="body">
                <p>Please select the <span class="greenText">prepared receiver asset</span>!</p>
                <label>Root of <span class="blueText">requested asset</span>:</label>
                <br>
                <input type="text" v-model="originAssetRoot" placeholder="DYBVDOBVTIRLM....." v-on:keyup.enter="createTwin" class="right">
                <br>
                <button v-on:click="requestAsset" class="btn-outline-primary btn btn-sm">Request Transfer</button>
              </div>
            </b-card>

            <b-card class="card">
              <h4>Approve Transfer<div class="info-bar"><a href="https://dollyvolley.com/#TransferAssetHelp"><p>?</p></a></div></h4>
              <div class="body">
                <p>Please select the <span class="greenText">asset</span> you want to transfer!</p>
                <label>Root of <span class="blueText">receiver asset</span>:</label>
                <br>
                <input type="text" v-model="targetAssetRoot" placeholder="DYBVDOBVTIRLM....." v-on:keyup.enter="createTwin" class="right">
                <br>
                <button v-on:click="approveTransfer" class="btn-outline-primary btn btn-sm">Approve Transfer</button>
              </div>
            </b-card>

        </b-tab>
        <b-tab title="Layer 2">
          <b-card class="b-card">
            <h3>Request Asset<div class="info-bar"><a href="https://dollyvolley.com/#CreateFirstAssetHelp"><p>?</p></a></div></h3>
            <label>Name:</label>
            <br>
            <input type="text" v-model="assetName" placeholder="Rocket #42" v-on:keyup.enter="createAutoTransferRequest">
            <br>
            <button v-on:click="createTwin" class="btn-outline-primary btn btn-sm">Create Twin</button>
          </b-card>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script lang="js" src="./controller.js"></script>

<style lang="css" src="./controller.css"></style>
