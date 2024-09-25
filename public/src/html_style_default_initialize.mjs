import { html_style_font_color_property } from "./html_style_font_color_property.mjs";
import { html_style_default_a } from "./html_style_default_a.mjs";
import { html_style_border_box_get } from "./html_style_border_box_get.mjs";
import { html_style_default } from "./html_style_default.mjs";
import { object_merge } from "./object_merge.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { html_style_button_default_initialize } from "./html_style_button_default_initialize.mjs";
import { html_style_default_font_size_value } from "./html_style_default_font_size_value.mjs";
import { html_style_default_font_size } from "./html_style_default_font_size.mjs";
import { html_style_sans_serif } from "./html_style_sans_serif.mjs";
export function html_style_default_initialize() {
  let root = html_document_body();
  html_style_sans_serif(root);
  object_merge(html_style_default(), html_style_border_box_get());
  html_style_default_font_size(html_style_default_font_size_value());
  html_style_button_default_initialize();
  html_style_default_a();
  object_merge(html_style_default_a(), {
    [html_style_font_color_property()]: "darkblue",
  });
  return root;
}
