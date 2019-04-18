type Printable = string | Tagged;
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

class Blink extends BasicTagged {
  type: PrintableType = "blink";
}

class Invert extends BasicTagged {
  type: PrintableType = "invert";
}

class Link extends BasicTagged {
  type: PrintableType = "link";
  href: string;
  constructor(body: Printable, href: string) {
    super(body);
    this.href = href;
  }
}

function blink(body: Printable) {
  return new Blink(body);
}

function invert(body: Printable) {
  return new Invert(body);
}

function link(body: Printable, href: string) {
  return new Link(body, href);
}

const line: Printable[] = [
  invert(blink("1.")),
  " ",
  link("Scheduler", "#/scheduler")
];
