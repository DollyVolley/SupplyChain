<template>
    <div class="container-fluid">
        <div class="title">Digital Twins Overview</div>
            <app-twincard class="float"
                v-for="item in $parent.twins"
                v-bind:twin="item"
                v-bind:key="item.id"
            ></app-twincard>
    </div>
</template>

<script>
export default {
    props: ["twin"]
}
</script>

<style scoped>

.title{
    text-align: center;
    font-size: 25pt;
    padding-bottom: 1em;
}

.float {
	float: left;
    width: 200px;
    margin: 0.5em;
}


</style>