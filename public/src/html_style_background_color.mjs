import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { html_style } from "./html_style.mjs";
export function html_style_background_color(container, color) {
  assert_arguments_length;
  html_style(container, {
    "background-color": color,
  });
}
