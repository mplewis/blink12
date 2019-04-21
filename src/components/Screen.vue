<template>
  <div class="grid">
    <Styler v-for="(line, i) in lines" :key="i" :printable="line" />
  </div>
</template>

<script lang="ts">
import Styler from "./Styler.vue";
import { blink, invert, link, Printable } from "../styler";
import { Vue, Component, Prop } from "vue-property-decorator";

function toChars(line: string) {
  return Array.from(line.replace(/ /g, "\xa0"));
}

export type PrintableLines = Printable[][];

interface ElemWithStyles {
  style: CSSStyleDeclaration;
}

function isElemWithStyles(i: any): i is ElemWithStyles {
  return (
    i &&
    i.style &&
    i.style.constructor &&
    i.style.constructor.name === "CSS2Properties"
  );
}

@Component({ components: { Styler } })
export default class Screen extends Vue {
  @Prop({ required: true }) lines!: PrintableLines;
  @Prop({ default: 20 }) width!: number;
  @Prop({ default: 9 }) height!: number;
  @Prop({ default: "white" }) foreground!: string;
  @Prop({ default: "navy" }) background!: string;
  @Prop({ default: "60px" }) fontSize!: string;
  @Prop({ default: 0.95 }) lineHeight!: number;

  mounted() {
    this.setVar("--foreground", this.foreground);
    this.setVar("--background", this.background);
    this.setVar("--size", this.fontSize);
    this.setVar("--screen-width", this.width);
    this.setVar("--screen-height", this.height);
    this.setVar("--line-height", this.lineHeight);
  }

  setVar(name: string, value: { toString: () => string }) {
    console.log({ name, value });
    const el = this.$el;
    if (!isElemWithStyles(el))
      throw new Error("<Styler>.style is not CSS2Properties");
    el.style.setProperty(name, value.toString());
  }
}
</script>

<style>
@font-face {
  font-family: "VCR";
  src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/225473/VCR_OSD_MONO_1.001.ttf");
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

.grid {
  --char-width-144: 84.3833; /* height: 158.067 */
  --screen-width-px: calc(var(--screen-width) * var(--char-width));
  --screen-height-px: calc(
    var(--screen-height) * var(--size) * var(--line-height)
  );
  --char-width: calc((var(--size) * var(--char-width-144) / 144));
  --char-height: calc(var(--size) * var(--line-height));

  display: inline-block;
  overflow: hidden;
  color: var(--foreground);
  background-color: var(--background);
  font-family: "VCR";
  font-size: var(--size);
  line-height: var(--line-height);
  height: var(--screen-height-px);
  width: var(--screen-width-px);
}

.invert {
  color: var(--background);
  background-color: var(--foreground);
  /* make the inverted boxes touch */
  --padding-base: calc(
    var(--line-height) * 2 * var(--size) * var(--line-height)
  );
  padding-top: calc(0.01 * var(--padding-base));
  padding-bottom: calc(0.05 * var(--padding-base));
}

.blink {
  animation: 1s linear infinite blinky;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
