<template>
  <Screen :lines="lines" fontSize="40px" width="20" height="9" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { blink, invert, link, Printable } from "./styler";
import Screen, { PrintableLines } from "./components/Screen.vue";

const lines: PrintableLines = [
  ["Blink12 VHS CSS FW"],
  ["--------------------"],
  [],
  [invert("1."), " ", link("Scheduler", "#/scheduler")],
  [invert("2."), " ", link("Playback Speed", "#/play")],
  [invert("3."), " ", link("Clean Heads", "#/heads")],
  [invert("4."), " ", link("Settings", "#/settings")],
  [],
  ["CH 3", "        ", blink("12:00 AM")]
];

@Component({
  components: { Screen }
})
export default class App extends Vue {
  lines = lines;
}
</script>
