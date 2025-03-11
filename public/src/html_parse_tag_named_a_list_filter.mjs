import { html_parse_tag_named } from "./html_parse_tag_named.mjs";
import { list_filter } from "./list_filter.mjs";
export function html_parse_tag_named_a_list_filter(children2) {
  let v = list_filter(children2, function (c) {
    let v2 = html_parse_tag_named(c, "a");
    return v2;
  });
  return v;
}
