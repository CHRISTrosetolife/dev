import { html_parse_visit_class_list } from "./html_parse_visit_class_list.mjs";
import { list_single } from "./list_single.mjs";
export function html_parse_visit_class_single(root_bible, newLocal) {
  return list_single(html_parse_visit_class_list(root_bible, newLocal));
}
