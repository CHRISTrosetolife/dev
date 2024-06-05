import { list_single } from "./list_single.mjs";
import { html_parse_visit_attribute_value_list } from "./html_parse_visit_attribute_value_list.mjs";
export function html_parse_visit_attribute_value_single(
  c,
  attribute_name,
  attribute_value,
) {
  let l = html_parse_visit_attribute_value_list(
    c,
    attribute_name,
    attribute_value,
  );
  list_single(l);
  return l;
}
