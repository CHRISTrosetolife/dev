import { html_style_font_color_property } from "./html_style_font_color_property.mjs";
import { html_style_text_decoration_property } from "./html_style_text_decoration_property.mjs";
import { html_style_default_a_merge } from "./html_style_default_a_merge.mjs";
export function html_style_a_plain() {
  html_style_default_a_merge({
    [html_style_text_decoration_property()]: "none",
    [html_style_font_color_property()]: "black",
  });
}
