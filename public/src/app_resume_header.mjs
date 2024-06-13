import { object_property_get } from "./object_property_get.mjs";
import { html_style_default } from "./html_style_default.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_font_size_property } from "./html_style_font_size_property.mjs";
import { html_style_default_font_size_value } from "./html_style_default_font_size_value.mjs";
import { html_style_centered } from "./html_style_centered.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function app_resume_header(root, header) {
  let h = html_p_text(root, header);
  let d = object_property_get(
    html_style_default(),
    html_style_font_size_property(),
  );
  html_style_font_size(h, font_size_bigger);
  html_style_bold(h);
  html_style_centered(h);
  html_style_default_font_size_value();
}
