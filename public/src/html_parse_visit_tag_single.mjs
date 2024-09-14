import { html_parse_text } from "./html_parse_text.mjs";
import { list_single_message } from "./list_single_message.mjs";
import { html_parse_visit_tag_list } from "./html_parse_visit_tag_list.mjs";
export function html_parse_visit_tag_single(node, tag_name) {
  let r = html_parse_visit_tag_list(node, tag_name);
  let s = list_single_message(r, () => ({
    node_text: html_parse_text(node),
  }));
  return s;
}
