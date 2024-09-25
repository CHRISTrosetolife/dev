import { html_style_font_size } from "./html_style_font_size.mjs";
import { multiply } from "./multiply.mjs";
import { html_style_numeric_parse } from "./html_style_numeric_parse.mjs";
import { html_style_font_size_property } from "./html_style_font_size_property.mjs";
import { html_style_default } from "./html_style_default.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function html_style_font_size_default_multiplied(h, multiplier) {
  let d = object_property_get(
    html_style_default(),
    html_style_font_size_property(),
  );
  let p = html_style_numeric_parse(d);
  let { value } = p;
  let size_new = multiply(value, multiplier);
  html_style_font_size(h, size_new);
}
