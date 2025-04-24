import { html_button_back } from "./html_button_back.mjs";
import { html_style_units } from "./html_style_units.mjs";
import { html_style_margin } from "./html_style_margin.mjs";
import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { html_style_background_color_white } from "./html_style_background_color_white.mjs";
import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
export function html_overlay_container(overlay, on_back) {
  html_clear(overlay);
  let container = html_div(overlay);
  html_style_background_color_white(container);
  html_style_rounded_padded(container);
  html_style_margin(container, html_style_units(2));
  html_button_back(container, on_back);
  return container;
}
