import { html_style_font_size_object } from "./html_style_font_size_object.mjs";
import { html_style_default } from "./html_style_default.mjs";
import { object_merge } from "./object_merge.mjs";
export function html_style_default_font_size(default_font_size) {
  object_merge(
    html_style_default(),
    html_style_font_size_object(default_font_size),
  );
}
