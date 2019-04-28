<template>
  <Screen :lines="lines" fontSize="40px" width="32" height="13" />
</template>

<script lang="ts">
import dayjs from "dayjs";
import { Component, Vue } from "vue-property-decorator";
import { linkExt, invert } from "../styler";
import Screen from "./Screen.vue";

@Component({ components: { Screen } })
export default class App extends Vue {
  get lines() {
    return [
      [" Projects"],
      [" --------"],
      [" * ", linkExt("https://github.com/mplewis/src2png", invert("src2png"))],
      ["   Images from source code"],
      [" * ", linkExt("https://csvtomd.com/", invert("csvtomd"))],
      ["   Markdown tables from CSVs"],
      [" * ", linkExt("http://whyvote.us/", invert("whyvote.us"))],
      ["   American electoral data"],
      [" * ", linkExt("https://memefax.website/", invert("memefax.website"))],
      ["   Unicode was a mistake"],
      [],
      [
        "        ",
        linkExt("https://github.com/mplewis", invert("GitHub profile"))
      ]
    ];
  }
}
</script>
