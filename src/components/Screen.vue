<template>
  <div class="grid">
    <div class="row" v-for="(line, i) in lines" :key="i">
      <Styler :printable="line"/>
    </div>
  </div>
</template>

<script lang="ts">
import Styler from "./Styler.vue";
import { render, blink, invert, link } from "../styler";
import { Component, Vue } from "vue-property-decorator";

function toChars(line: string) {
  return Array.from(line.replace(/ /g, "\xa0"));
}

const lines = [
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

export default {
  name: "Screen",
  components: { Styler },
  data: () => ({ lines })
};
</script>

<style lang="stylus">
foreground = white;
background = navy;

@font-face {
  font-family: 'VCR';
  src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/225473/VCR_OSD_MONO_1.001.ttf');
  font-weight: normal;
  font-style: normal;
}

@keyframes blinky {
  0% {
    visibility: hidden;
  }

  25% {
    visibility: hidden;
  }

  100% {
    visibility: visible;
  }
}

body {
  color: foreground;
  background-color: background;
}

.grid {
  font-family: 'VCR';
  font-size: 36px;
  line-height: 0.9;
}

.row {
  height: 36px;
  width: 422px;
  overflow: hidden;
}

.col {
  display: inline-block;
}

.char {
  display: inline-block;
}

.invert {
  color: background;
  background-color: foreground;
}

.blink {
  animation: 1s linear infinite blinky;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
