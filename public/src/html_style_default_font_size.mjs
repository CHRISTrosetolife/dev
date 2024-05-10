import { string_combine } from "./string_combine.mjs";
import { html_style_default } from "./html_style_default.mjs";
import { object_merge } from "./object_merge.mjs";
export function html_style_default_font_size(default_font_size) {
  object_merge(html_style_default(), {
    "font-size": string_combine(default_font_size.toString(), "vh"),
  });
}
