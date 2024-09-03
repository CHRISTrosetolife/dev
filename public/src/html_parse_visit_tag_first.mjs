import { list_single } from "./list_single.mjs";
import { html_parse_visit_tag_list } from "./html_parse_visit_tag_list.mjs";
export function html_parse_visit_tag_first(node, tag_name) {
  let r = html_parse_visit_tag_list(node, tag_name);
  let s = list_single(r);
  return s;
}
