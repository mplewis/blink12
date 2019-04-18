<script lang="ts">
import { Printable, Link } from "../styler";
import { Vue, Component, Prop } from "vue-property-decorator";
import { CreateElement, VNode } from "vue";

type Renderable = string | VNode;
type Renderer = (item: Printable) => Renderable;

const _render = (h: CreateElement): Renderer => {
  return function innerRender(item: Printable): Renderable {
    if (typeof item === "string") return item.replace(/ /g, "\xa0");

    const next: Renderable = innerRender(item.body);
    if (item.type === "blink") return h("span", { class: "blink" }, [next]);
    if (item.type === "invert") return h("span", { class: "invert" }, [next]);

    const { href } = <Link>item;
    const attrs = { href };
    return h("a", { attrs }, [next]);
  };
};

@Component
export default class Styler extends Vue {
  @Prop({ required: true }) printable!: Printable[];

  render(h: CreateElement) {
    const renderer = _render(h);
    return h("div", this.printable.map(renderer));
  }
}
</script>
