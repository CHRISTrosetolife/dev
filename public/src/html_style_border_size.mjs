import { html_style } from "./html_style.mjs";
export function html_style_border_size(answer_element, value) {
  html_style(answer_element, {
    "border-color": value,
  });
}
