<template>
    <div class="container">
        <p class="name">{{ twin.name }}</p>
        <p class="meta">Owner:         {{ twin.owner }}</p>
        <p class="meta">Creation Date: {{ twin.create_date }} </p>
        <p>Root:</p>
        <p class="root">{{ twin.root }}</p>
    </div>
</template>

<script>
export default {
    props: ["twin"]
}
</script>

<style scoped>

    p {
        margin-bottom: 2px;
    }

    div {
        margin-bottom: 1em;
        background: aliceblue;
        width: 75%;
        height: 280px;
    }

    .name {
        margin: 1em 0;
        font-size: 15pt;
    }

    .meta {
        font-size: 10pt;
    }

    .root {
        border: 1px solid black;
        width: 50%;
        font-size: 6pt;
        word-wrap: break-word;
    }


</style>