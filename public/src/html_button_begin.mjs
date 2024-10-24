import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_default_font_size_value } from "./html_style_default_font_size_value.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { multiply } from "./multiply.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function html_button_begin(root, text, begin_onclick) {
  let default_font_size = html_style_default_font_size_value();
  let begin = html_button_width_full_text_click(
    root,
    string_combine_multiple(["🚀 begin"]),
    begin_onclick,
  );
  let font_size_bigger = multiply(default_font_size, 1.2);
  html_style_font_size(begin, font_size_bigger);
  html_style_bold(begin);
  return begin;
}
