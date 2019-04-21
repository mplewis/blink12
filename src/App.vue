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
  [invert("1."), " ", link("#/scheduler", "Scheduler")],
  [invert("2."), " ", link("#/play", "Playback Speed")],
  [
    invert("3."),
    " ",
    link("#/heads", "Clean ", invert("H", blink("e")), "ads")
  ],
  [invert("4."), " ", link("#/settings", "Settings")],
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
