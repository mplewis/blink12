export type Printable = string | Tagged;
type Tagged = Blink | Invert | Link;

interface Content {
  body: Printable[];
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
  external?: boolean;
}

export function blink(...body: Printable[]): Blink {
  return { kind: "blink", body };
}

export function invert(...body: Printable[]): Invert {
  return { kind: "invert", body };
}

export function link(href: string, ...body: Printable[]): Link {
  return { kind: "link", body, href };
}

export function linkExt(href: string, ...body: Printable[]): Link {
  return Object.assign({}, link(href, ...body), { external: true });
}
