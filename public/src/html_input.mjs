import { html_style_border_box } from "./html_style_border_box.mjs";
import { html_element } from "./html_element.mjs";
export function html_input(root) {
  let input = html_element(root, "input");
  html_style_border_box(input);
  return input;
}
