<template>
  <Screen
    :lines="lines"
    :images="images"
    fontSize="40px"
    width="32"
    height="13"
  />
</template>

<script lang="ts">
import dayjs from "dayjs";
import { Component, Vue } from "vue-property-decorator";
import { blink, invert, link, linkExt, Printable } from "../styler";
import Screen, { PrintableLines, Image } from "./Screen.vue";

@Component({ components: { Screen } })
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
      [" 1: ", link("#/work", invert("My Work"))],
      [" 2: ", link("#/projects", invert("My Projects"))],
      [" 3: ", link("#/hobbies", invert("My Hobbies"))],
      [
        " 4: ",
        linkExt("https://mplewis.com/resume.pdf", invert("Resume (PDF)"))
      ],
      [" 5: ", linkExt("mailto:matt@mplewis.com", invert("Email Me"))],
      [
        " 6: ",
        linkExt("https://github.com/mplewis/blink12", invert("Site Source"))
      ],
      [],
      ["REC                         CH 3"]
    ];
  }
}
</script>
