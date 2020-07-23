<template>
    <div>
        <div class="title">Controller</div>
        <div class="list-group">
            <div class="list-group-item card">
                <h3>Create Twin</h3>
                <label>Name:</label>
                <input type="text"  v-model="twinNameInput" placeholder="Rocket #42" v-on:keyup.enter="createTwin">
                <button v-on:click="createTwin" >Create Twin</button>
            </div>     
            <div class="list-group-item card">
                <h3>Attach Measurement</h3>
                <label>Capacity [mAh]:</label>
                <input type="text"  v-model="twinMeasurementInput" placeholder="243.76" v-on:keyup.enter="createTwin">
                <button v-on:click="createTwin" >Attach Measurement</button>
            </div>
            <div class="list-group-item card">
                <h3>Create Transfer Request</h3>
                <label>Root of twin:</label>
                <input type="text"  v-model="twinTransferRequestInput" placeholder="DYBVDOBVTIRLM....." v-on:keyup.enter="createTwin" class="right">
                <button v-on:click="createTwin" >Request Transfer</button>
            </div>
            <div class="list-group-item card">
                <h3>Approve Transfer</h3>
                <label>Root of new owner:</label>
                <input type="text"  v-model="twinTransferRequestInput" placeholder="DYBVDOBVTIRLM....." v-on:keyup.enter="createTwin" class="right">
                <button v-on:click="createTwin" >Approve Transfer</button>
            </div>
        </div>
    </div>
</template>

<script>
import Consts from "../common/const"
export default {
    data() {
        return {
            twinNameInput: '',
        }
    },
    methods: {

        createTwin: function createTwin() {
            let owner = this.$parent.actingAs
            if (!owner) {
                console.error("You can not act as uNdEfiEnd *Insert Spongebob Meme*. Choose a party!")
                return 1
            } 

            let name = this.twinNameInput
            if (!name) {
                console.error("No name typed!")
                return 1
            } 

            let mamState = Mam.init(Consts.IOTA_NODE_URL)
            let root = Mam.getRoot(mamState)
            
            let twin = {
                root: root,
                state: mamState,
                name: name,
                owner: owner,
                create_date: new Date().toISOString().split('T')[0]
            }

            this.$parent.twins.push(twin)
            return true
        }

    }
}
</script>

<style>

.title{
    text-align: center;
    font-size: 25pt;
    padding-bottom: 1em;
}

.card {
    margin: 1em;
}

.left {
    float:right;
}

</style>