import { log } from "./log.mjs";
import { html_parse_visit_tag_first } from "./html_parse_visit_tag_first.mjs";
import { list_map } from "./list_map.mjs";
import { list_second } from "./list_second.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { html_parse_tag_named } from "./html_parse_tag_named.mjs";
import { list_filter } from "./list_filter.mjs";
import { html_parse_children } from "./html_parse_children.mjs";
import { list_size } from "./list_size.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { http_cache_parse_parsed } from "./http_cache_parse_parsed.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
export async function catholic_bishops_letter(letter) {
  let url = string_combine_multiple([
    "https://www.catholic-hierarchy.org/bishop/la",
    letter,
    ".html",
  ]);
  let { root } = await http_cache_parse_parsed(url);
  let body = html_parse_visit_tag_single(root, "body");
  let body_children = html_parse_children(body);
  let uls = list_filter(body_children, function (c) {
    let v = html_parse_tag_named(c, "ul");
    return v;
  });
  assert(equal, [list_size(uls), 2]);
  let s = list_second(uls);
  let s_children = html_parse_children(s);
  let v2 = list_map(s_children, function (li) {
    log(li);
    let v3 = html_parse_text(html_parse_visit_tag_first(li, "a"));
    return v3;
  });
  return v2;
}
