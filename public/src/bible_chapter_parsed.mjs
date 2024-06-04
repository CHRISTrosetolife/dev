import { bible_url_base } from "./bible_url_base.mjs";
import { html_parse_visit_attribute_value } from "./html_parse_visit_attribute_value.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { string_combine } from "./string_combine.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_remove } from "./list_remove.mjs";
export async function bible_chapter_parsed(bible_folder, chapter_name) {
  let url_base = bible_url_base(bible_folder);
  let chapter_path = string_combine(chapter_name, ".htm");
  let joined = string_combine_multiple([url_base, chapter_path]);
  let root = await html_cache_parse(joined);
  html_parse_visit_attribute_value(root, "class", "notemark", (v) => {
    let { node } = v;
    let { parent } = node;
    let { children } = parent;
    list_remove(children, node);
  });
  return root;
}
