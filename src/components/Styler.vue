<script lang="ts">
import { Printable } from "../styler";
import { Vue, Component, Prop } from "vue-property-decorator";
import { CreateElement, VNode } from "vue";

type Renderable = (string | VNode)[];
type Renderer = (item: Printable) => Renderable;

const _render = (h: CreateElement): Renderer => {
  return function innerRender(item: Printable): Renderable {
    if (typeof item === "string") return [item.replace(/ /g, "\xa0")];

    const next: Renderable[] = item.body.map(innerRender);
    if (item.kind === "blink") {
      return [h("span", { class: "blink" }, next)];
    } else if (item.kind === "invert") {
      return [h("span", { class: "invert" }, next)];
    } else if (item.kind === "link") {
      return [h("a", { attrs: { href: item.href } }, next)];
    } else {
      const _: never = item;
      return [""];
    }
  };
};

function replaceEmpty(line: Printable[]): Printable[] {
  const empty = line.length === 0;
  const blank = line.length === 1 && line[0] === "";
  if (!empty && !blank) return line;
  return [" "];
}

@Component
export default class Styler extends Vue {
  @Prop({ required: true }) printable!: Printable[];

  render(h: CreateElement) {
    const renderer = _render(h);
    return h("div", replaceEmpty(this.printable).map(renderer));
  }
}
</script>
