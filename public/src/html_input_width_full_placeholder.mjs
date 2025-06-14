import { object_merge_strict } from "./object_merge_strict.mjs";
import { html_style_font_size_default_multiplied } from "./html_style_font_size_default_multiplied.mjs";
import { html_style_left } from "./html_style_left.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_placeholder } from "./html_placeholder.mjs";
import { html_input_width_full } from "./html_input_width_full.mjs";
export function html_input_width_full_placeholder(parent, placeholder) {
  let fn = html_input_width_full;
  let title = html_div_text(parent, placeholder);
  html_style_font_size_default_multiplied(title, 0.8);
  html_style_left(title);
  let input = fn(parent);
  html_placeholder(input, placeholder);
  let v = object_merge_strict(
    {
      title,
    },
    input,
  );
  return v;
}
