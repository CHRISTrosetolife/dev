import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { html_style_background_color } from "./html_style_background_color.mjs";
import { html_div } from "./html_div.mjs";
export function app_learn_code_code_container(parent) {
  let container = html_div(parent);
  html_style_rounded_padded(container);
  html_style_background_color(container, "lightgray");
  return container;
}
