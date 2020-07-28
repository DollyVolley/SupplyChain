<template>
  <div class="container-fluid">
    <div>
      <label>
      </label>
    </div>
    <app-twincard class="float"
                  v-for="(item, i) in $parent.twins"
                  v-bind:twin="item"
                  v-bind:key="i"
                  :class="{active: i === $parent.activeItem}"
                  @click.native="select(i)"
    ></app-twincard>
  </div>
</template>

<script>
  export default {
    props: ["twin"],
    methods: {
      select: function(i) {
        console.debug("Selected twin Index: " + i)
        if(this.$parent.twins[i].pending || this.$parent.twins[i].terminated)  {
          console.error("Object pending, can not select it")
          return 1
        }
        this.$parent.activeItem = i;
      },
    }
  }
</script>

<style scoped>

  .float {
    float: left;
    width: 250px;
    margin: 0.75em;
  }

  .active {
    background: #59ee9e;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }


</style>
