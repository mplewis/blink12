<template>
  <Screen :lines="lines" fontSize="40px" width="32" height="2" />
</template>

<script lang="ts">
import dayjs from "dayjs";
import { Component, Vue } from "vue-property-decorator";
import {} from "vue-router";
import { blink, invert, link, Printable } from "../styler";
import Screen, { PrintableLines, Image } from "./Screen.vue";

@Component({
  components: { Screen }
})
export default class Header extends Vue {
  time: any = blink("12:00 AM");

  get lines() {
    return [
      [link("#/", "Matt Lewis"), "              ", this.time],
      ["================================"]
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
