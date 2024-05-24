import { html_style_default_border_margin } from "./html_style_default_border_margin.mjs";
import { html_style_button_default_background_color } from "./html_style_button_default_background_color.mjs";
import { html_style_button_default_value } from "./html_style_button_default_value.mjs";
import { object_merge } from "./object_merge.mjs";
export function html_style_button_default_initialize() {
  let d = html_style_button_default_value();
  html_style_default_border_margin(d);
  object_merge(html_style_button_default_value(), {
    "background-color": html_style_button_default_background_color(),
  });
}
