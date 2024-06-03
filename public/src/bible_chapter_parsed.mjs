import { html_parse_visit_tag_attribute } from "./html_parse_visit_tag_attribute.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { path_join } from "./path_join.mjs";
import { string_combine } from "./string_combine.mjs";
import { url_secure } from "./url_secure.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function bible_chapter_parsed(bible_folder, chapter_name) {
  let url_base = string_combine_multiple([
    url_secure(),
    "ebible.org/",
    bible_folder,
    "/",
  ]);
  let chapter_path = string_combine(chapter_name, ".htm");
  let joined = path_join([url_base, chapter_path]);
  let root = await html_cache_parse(joined);
  html_parse_visit_tag_attribute(root, "class", "notemark", (v) => {
    let node = v;
  });
  let notemarks = root.querySelectorAll(".notemark");
  for (let n of notemarks) {
    n.remove();
  }
  return root;
}
