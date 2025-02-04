import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_input_validated_error_color } from "./html_input_validated_error_color.mjs";
import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { html_div } from "./html_div.mjs";
import { html_input_width_full_placeholder } from "./html_input_width_full_placeholder.mjs";
export function html_input_validated(root, placeholder) {
  let input_username = html_input_width_full_placeholder(root, placeholder);
  let error_message = html_div(root);
  html_style_rounded_padded(error_message);
  let error_color = html_input_validated_error_color();
  html_style_font_color(error_message, error_color);
  return {
    error_message,
    error_color,
    input_username,
  };
}
