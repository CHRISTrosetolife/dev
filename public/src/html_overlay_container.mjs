import { html_button_back } from "./html_button_back.mjs";
import { html_style_units } from "./html_style_units.mjs";
import { html_style_margin } from "./html_style_margin.mjs";
import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { html_style_background_color_white } from "./html_style_background_color_white.mjs";
import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
export function html_overlay_container(overlay, menu_refresh) {
  html_clear(overlay);
  let d = html_div(overlay);
  html_style_background_color_white(d);
  html_style_rounded_padded(d);
  html_style_margin(d, html_style_units(2));
  html_button_back(d, menu_refresh);
  return d;
}
