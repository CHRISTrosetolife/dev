import { file_extension_html } from "./file_extension_html.mjs";
import { http_iso_8859_1_cache } from "./http_iso_8859_1_cache.mjs";
import { html_parse_parsed } from "./html_parse_parsed.mjs";
import { html_parse_children_named } from "./html_parse_children_named.mjs";
import { html_parse_visit_tag_list } from "./html_parse_visit_tag_list.mjs";
import { html_parse_visit_tag_first } from "./html_parse_visit_tag_first.mjs";
import { list_map } from "./list_map.mjs";
import { list_second } from "./list_second.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { list_size } from "./list_size.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
export async function catholic_bishops_letter(letter) {
  let url = string_combine_multiple([
    "https://www.catholic-hierarchy.org/bishop/la",
    letter,
    file_extension_html(),
  ]);
  let html = await http_iso_8859_1_cache(url);
  let p = await html_parse_parsed(html);
  let { root } = p;
  let body = html_parse_visit_tag_single(root, "body");
  let tag_name = "ul";
  let uls = html_parse_children_named(body, tag_name);
  assert(equal, [list_size(uls), 2]);
  let s = list_second(uls);
  let s_children = html_parse_visit_tag_list(s, "li");
  let v2 = list_map(s_children, function (li) {
    let v3 = html_parse_text(html_parse_visit_tag_first(li, "a"));
    return v3;
  });
  return v2;
}
