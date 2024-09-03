import { list_first } from "./list_first.mjs";
import { html_parse_visit_tag_list } from "./html_parse_visit_tag_list.mjs";
export function html_parse_visit_tag_first(node, tag_name) {
  let r = html_parse_visit_tag_list(node, tag_name);
  let s = list_first(r);
  return s;
}
