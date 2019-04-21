<template>
  <Screen :lines="lines" :images="images" fontSize="40px" width="32" height="15" :style="style"/>
</template>

<script lang="ts">
import dayjs from "dayjs";
import { Component, Vue } from "vue-property-decorator";
import { blink, invert, link, Printable } from "./styler";
import Screen, { PrintableLines, Image } from "./components/Screen.vue";

import moto from "./assets/moto.jpg";
console.log({ moto });

const images: Image[] = [
  {
    href: moto,
    x: 400,
    y: 190,
    size: { kind: "height", height: "320px" }
  }
];

@Component({
  components: { Screen }
})
export default class App extends Vue {
  images = images;
  time: any = blink("12:00 AM");

  get lines() {
    return [
      [link("#/", "Matt Lewis"), "              ", this.time],
      ["--------------------------------"],
      [" Software engineer, digital"],
      [" enthusiast, and motorcyclist."],
      [],
      [" MENU:"],
      [" ", link("#/work", invert("1:"), " My Work")],
      [" ", link("#/work", invert("2:"), " My Projects")],
      [" ", link("#/work", invert("3:"), " My Hobbies")],
      [],
      [" (Use VCR"],
      [" remote to"],
      [" select item"],
      [" from list)"],
      ["                            CH 3"]
    ];
  }

  updateTime() {
    let now = dayjs().format("h:mm A");
    if (now.length < 8) now = ` ${now}`;
    this.time = now;
  }

  mounted() {
    setTimeout(() => {
      this.updateTime();
      setInterval(this.updateTime, 1000);
    }, 4500);
  }
}
</script>

<style>
body {
  text-align: center;
}
</style