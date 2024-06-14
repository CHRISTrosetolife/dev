import { each } from "./each.mjs";
import { html_style } from "./html_style.mjs";
export function html_style_width(component, value) {
  each(["min-width", "max-width"], (w) =>
    html_style(component, {
      [w]: value,
    }),
  );
}
