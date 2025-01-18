import { html_style } from "./html_style.mjs";
import { html_div } from "./html_div.mjs";
export function html_spacer_vertical(parent) {
  let spacer_vertical = html_div(parent);
  html_style(spacer_vertical, {
    height: "1vh",
  });
}
