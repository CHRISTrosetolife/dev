import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { html_element } from "./html_element.mjs";
export function html_span(parent) {
  assert_arguments_length(arguments, 1);
  return html_element(parent, "span");
}
