export type Printable = string | Tagged;
type PrintableType = "blink" | "invert" | "link";

abstract class Tagged {
  abstract type: PrintableType;
  abstract get body(): Printable;
}

abstract class BasicTagged extends Tagged {
  protected _body: Printable;
  constructor(body: Printable) {
    super();
    this._body = body;
  }
  get body() {
    return this._body;
  }
}

export class Blink extends BasicTagged {
  type: PrintableType = "blink";
}

export class Invert extends BasicTagged {
  type: PrintableType = "invert";
}

export class Link extends BasicTagged {
  type: PrintableType = "link";
  href: string;
  constructor(body: Printable, href: string) {
    super(body);
    this.href = href;
  }
}

export function blink(body: Printable) {
  return new Blink(body);
}

export function invert(body: Printable) {
  return new Invert(body);
}

export function link(body: Printable, href: string) {
  return new Link(body, href);
}

function _render(item: Printable): string {
  if (typeof item === "string") return item;
  const next: Printable = _render(item.body);
  if (item.type === "blink") return `<blink>${next}</blink>`;
  if (item.type === "invert") return `<invert>${next}</invert>`;
  return `<a href="${(<Link>item).href}">${next}</invert>`;
}

export function render(line: Printable[]) {
  return line.map(_render).join("");
}
