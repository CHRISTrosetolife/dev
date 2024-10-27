import { html_parse_visit_attribute_value_list } from "./html_parse_visit_attribute_value_list.mjs";
import { list_single } from "./list_single.mjs";
export function html_parse_visit_id(node, id_value) {
  let ids = html_parse_visit_attribute_value_list(node, "id", id_value);
  return list_single(ids);
}
