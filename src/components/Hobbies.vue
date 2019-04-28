<template>
  <Screen :lines="lines" fontSize="40px" width="32" height="13" />
</template>

<script lang="ts">
import dayjs from "dayjs";
import { Component, Vue } from "vue-property-decorator";
import Screen from "./Screen.vue";

@Component({ components: { Screen } })
export default class App extends Vue {
  get lines() {
    return [
      [" Hobbies"],
      [" -------"],
      [" * Motorcycling"],
      ["   2013 Street Triple"],
      [" * Bicycling"],
      ["   When it's warm outside"],
      [" * Aviation"],
      ["   Enthusiast, aspiring pilot"],
      [" * Succulents"],
      ["   Raising tiny houseplants"],
      [" * 3D printing"],
      ["   Tiny parts and plant pots"]
    ];
  }
}
</script>
