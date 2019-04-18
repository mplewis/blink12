import { render, blink, invert, link } from "./styler";

it("", () => {
  const out = render([
    invert(blink("1.")),
    " ",
    link("Scheduler", "#/scheduler")
  ]);
  expect(out).toEqual(
    '<invert><blink>1.</blink></invert> <a href="#/scheduler">Scheduler</invert>'
  );
});
