import { html_parse_visit_attribute_values_list } from "./html_parse_visit_attribute_values_list.mjs";
export function html_parse_visit_classes_list(root, class_names) {
  let attribute_name = "class";
  let verses = html_parse_visit_attribute_values_list(
    root,
    attribute_name,
    class_names,
  );
  return verses;
}
