import { string_combine } from "./string_combine.mjs";
export function html_style_default_font_size_value_get(default_font_size) {
  return string_combine(default_font_size.toString(), "vh");
}
