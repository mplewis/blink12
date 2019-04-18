<template>
  <div class="grid">
    <Styler v-for="(line, i) in lines" :key="i" :printable="line" />
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
line-height = 0.95;
size = 144px;
screen-width-chars = 20;
screen-height-chars = 9;
// @ 144px
char-width-144 = 84.3833;
char-height-144 = 158.067;
char-width = (size * char-width-144 / 144px);
char-height = size * line-height;
screen-width = screen-width-chars * char-width;
screen-height = screen-height-chars * char-height;

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
  background-color: black;
}

.grid {
  display: inline-block;
  color: foreground;
  background-color: background;
  font-family: 'VCR';
  font-size: size;
  line-height: line-height;
  width: screen-width;
  height: screen-height;
  overflow: hidden;
}

.invert {
  color: background;
  background-color: foreground;
  // make the inverted boxes touch
  padding-top: 0.03 * size;
  padding-bottom: 0.1 * size;
}

.blink {
  animation: 1s linear infinite blinky;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
