<template>
  <Screen
    :lines="lines"
    :images="images"
    fontSize="40px"
    width="32"
    height="13"
    :style="style"
  />
</template>

<script lang="ts">
import dayjs from "dayjs";
import { Component, Vue } from "vue-property-decorator";
import { blink, invert, link, Printable } from "../styler";
import Screen, { PrintableLines, Image } from "./Screen.vue";

@Component({
  components: { Screen }
})
export default class App extends Vue {
  images = [
    {
      href: require("../assets/moto.jpg"),
      x: 400,
      y: 190,
      size: { kind: "height", height: "320px" }
    }
  ];

  get lines() {
    return [
      [" Software engineer, digital"],
      [" enthusiast, and motorcyclist."],
      [],
      [" MENU"],
      [" ---------------"],
      [" ", link("#/work", invert("1:"), " My Work")],
      [" ", link("#/projects", invert("2:"), " My Projects")],
      [" ", link("#/hobbies", invert("3:"), " My Hobbies")],
      [],
      [],
      [],
      [],
      ["REC                         CH 3"]
    ];
  }
}
</script>
