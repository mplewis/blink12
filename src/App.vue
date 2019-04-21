<template>
  <Screen :lines="lines" fontSize="40px" width="32" height="15" />
</template>

<script lang="ts">
import dayjs from "dayjs";
import { Component, Vue } from "vue-property-decorator";
import { blink, invert, link, Printable } from "./styler";
import Screen, { PrintableLines } from "./components/Screen.vue";

@Component({
  components: { Screen }
})
export default class App extends Vue {
  time: any = blink("12:00 AM");

  get lines() {
    return [
      [link("#/", "Matt Lewis"), "              ", this.time],
      ["--------------------------------"],
      [" Backend engineer, digital"],
      [" enthusiast, and motorcyclist."],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [" ", link("#/work", invert("1."), " ", "Where I work")],
      [" ", link("#/make", invert("2."), " ", "What I create")],
      [" ", link("#/do", invert("3."), " ", "What I do")],
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
    console.log("ok!");
  }
}
</script>
