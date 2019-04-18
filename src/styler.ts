export type Printable = string | Tagged;
type Tagged = Blink | Invert | Link;

interface Content {
  body: Printable;
}

interface Blink extends Content {
  kind: "blink";
}

interface Invert extends Content {
  kind: "invert";
}

interface Link extends Content {
  kind: "link";
  href: string;
}

export function blink(body: Printable): Blink {
  return { kind: "blink", body };
}

export function invert(body: Printable): Invert {
  return { kind: "invert", body };
}

export function link(body: Printable, href: string) {
  return { kind: "link", body, href };
}
