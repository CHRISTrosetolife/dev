import { html_parse_tag_name } from "./html_parse_tag_name.mjs";
import { html_parse_tag_is } from "./html_parse_tag_is.mjs";
import { equal } from "./equal.mjs";
export function html_parse_tag_named(node, tag_name) {
  let v = html_parse_tag_is(node) && equal(html_parse_tag_name(node), tag_name);
  return v;
}
