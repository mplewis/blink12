<template>
  <div class="grid">
    <div class="row" v-for="(line, ln) in body" :key="ln">
      <div class="col" v-for="(char, cn) in line" :key="cn">
        <span class="char" v-html="char" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
const data = `
12345678901234567890

Blink12 CSS VCR OSD

MENU:
1) Scheduler
2) Clean Heads
3) Settings

12345678901234567890
`.trim();

function toChars(line: string) {
  return Array.from(line.replace(/ /g, "\xa0"));
}

const body = data.split("\n").map(toChars);

export default {
  data: () => ({
    body
  })
};
</script>

<style lang="stylus" scoped>
@font-face {
  font-family: 'VCR';
  src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/225473/VCR_OSD_MONO_1.001.ttf');
  font-weight: normal;
  font-style: normal;
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
</style>
