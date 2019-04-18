<template>
  <div id="app">
    <Grid />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Grid from "./components/Grid.vue";

@Component({
  components: {
    Grid
  }
})
export default class App extends Vue {}
</script>

<style lang="stylus">
body {
  width: 422px;
  margin-left: auto;
  margin-right: auto;
}
</style>
