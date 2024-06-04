import { html_parse_visit_attribute_value_list } from "./html_parse_visit_attribute_value_list.mjs";
export function html_parse_visit_class_list(parsed_ceb, class_name) {
  return html_parse_visit_attribute_value_list(parsed_ceb, "class", class_name);
}
