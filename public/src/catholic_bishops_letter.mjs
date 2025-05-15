import { html_parse_visit_tag_list } from "./html_parse_visit_tag_list.mjs";
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
  let uls = html_parse_visit_tag_list(body, "ul");
}
