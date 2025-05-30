import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { catholic_bishops_generate_folder } from "./catholic_bishops_generate_folder.mjs";
import { html_parse_visit_tag_first } from "./html_parse_visit_tag_first.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { list_map } from "./list_map.mjs";
import { html_parse_visit_tag_list } from "./html_parse_visit_tag_list.mjs";
import { list_second } from "./list_second.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { html_parse_children_named } from "./html_parse_children_named.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { http_iso_8859_1_cache_parse_parsed } from "./http_iso_8859_1_cache_parse_parsed.mjs";
export async function catholic_bishops_page(item) {
  let folder = catholic_bishops_generate_folder();
  let url = string_combine_multiple([folder, item]);
  let p = await http_iso_8859_1_cache_parse_parsed(url);
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
