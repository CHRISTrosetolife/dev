import { html_parse_tag_named } from "./html_parse_tag_named.mjs";
import { list_filter } from "./list_filter.mjs";
import { html_parse_children } from "./html_parse_children.mjs";
import { list_size } from "./list_size.mjs";
import { log } from "./log.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { http_cache_parse_parsed } from "./http_cache_parse_parsed.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function catholic_bishops_letter(letter) {
  let url = string_combine_multiple([
    "https://www.catholic-hierarchy.org/bishop/la",
    letter,
    ".html",
  ]);
  let { root } = await http_cache_parse_parsed(url);
  let body = html_parse_visit_tag_single(root, "body");
  let children = html_parse_children(body);
  let uls = list_filter(children, function (c) {
    let v = html_parse_tag_named(c, "ul");
    return v;
  });
  log(list_size(uls));
}
