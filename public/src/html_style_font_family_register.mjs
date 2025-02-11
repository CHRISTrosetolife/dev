import { html_style_font_family } from "./html_style_font_family.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_font_register } from "./html_font_register.mjs";
export function html_style_font_family_register(text_span, font_name) {
  html_font_register(font_name, string_combine_multiple(["font/", font_name]));
  html_style_font_family(text_span, font_name);
}
