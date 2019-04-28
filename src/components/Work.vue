<template>
  <Screen :lines="lines" fontSize="40px" width="32" height="13" />
</template>

<script lang="ts">
import dayjs from "dayjs";
import { Component, Vue } from "vue-property-decorator";
import { link, linkExt, invert } from "../styler";
import Screen from "./Screen.vue";

@Component({ components: { Screen } })
export default class App extends Vue {
  get lines() {
    return [
      [" My Work"],
      [" -------"],
      [
        " * 2018-19: ",
        linkExt("https://www.t-mobile.com/tv", invert("T-Mobile Home&Ent."))
      ],
      ["   Node.js microservices for"],
      ["   TVision streaming video"],
      [" * 2017-18: ", linkExt("https://gusto.com", invert("Gusto"))],
      ["   Rails full-stack tax filing"],
      ["   and compliance for small biz."],
      [
        " * 2013-16: ",
        linkExt("https://punchthrough.com", invert("Punch Through"))
      ],
      ["   BLE embedded devices with"],
      ["   full-stack mobile/web"],
      [
        "      ",
        linkExt(
          "https://mplewis.com/resume.pdf",
          invert("Download: resume.pdf")
        )
      ]
    ];
  }
}
</script>
