import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { http_cache_parse_parsed } from "./http_cache_parse_parsed.mjs";
import { each_async } from "./each_async.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { keyboard_keys_sorted } from "./keyboard_keys_sorted.mjs";
export async function sandbox_4() {
  await each_async(keyboard_keys_sorted(), async function (letter) {
    let url = string_combine_multiple([
      "https://www.catholic-hierarchy.org/bishop/la",
      letter,
      ".html",
    ]);
    let { root } = await http_cache_parse_parsed(url);
    html_parse_visit_tag_single();
  });
}
