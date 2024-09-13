import { html_parse_class } from "./html_parse_class.mjs";
export function html_parse_class_is(c, target_class_value) {
  return html_parse_class(c) === target_class_value;
}
