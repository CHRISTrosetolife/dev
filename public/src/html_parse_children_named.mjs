import { html_parse_tag_named } from "./html_parse_tag_named.mjs";
import { list_filter } from "./list_filter.mjs";
import { html_parse_children } from "./html_parse_children.mjs";
export function html_parse_children_named(body, tag_name) {
  let body_children = html_parse_children(body);
  let uls = list_filter(body_children, function (c) {
    let v = html_parse_tag_named(c, tag_name);
    return v;
  });
  return uls;
}
