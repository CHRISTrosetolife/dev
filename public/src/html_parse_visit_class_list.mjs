import { html_parse_visit_attribute_value_list } from "./html_parse_visit_attribute_value_list.mjs";
export function html_parse_visit_class_list(node, class_name) {
  return html_parse_visit_attribute_value_list(node, "class", class_name);
}
