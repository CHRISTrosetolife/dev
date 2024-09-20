import { html_style_rounded_padded_style } from "./html_style_rounded_padded_style.mjs";
import { html_style_button_default_border } from "./html_style_button_default_border.mjs";
import { html_style_margin_default_value } from "./html_style_margin_default_value.mjs";
import { object_merge } from "./object_merge.mjs";
export function html_style_default_border_margin(d) {
  object_merge(d, html_style_rounded_padded_style());
  object_merge(d, html_style_margin_default_value());
  object_merge(d, html_style_button_default_border());
  return d;
}
