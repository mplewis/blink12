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
12345678901234567890
12345678901234567890
12345678901234567890
12345678901234567890
12345678901234567890
1234567  01234567890
12345678901234567890
12345678901234567890
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
}

.row {
  height: 28px;
}

.col {
  display: inline-block;
}

.char {
  display: inline-block;
}
</style>
