import { html_style } from "./html_style.mjs";
import { html_div } from "./html_div.mjs";
export function html_spacer_vertical(input_container) {
  let spacer_vertical = html_div(input_container);
  html_style(spacer_vertical, {
    height: "1vh",
  });
}
