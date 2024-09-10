import { bible_url_htm } from "./bible_url_htm.mjs";
import { html_parse_visit_attribute_value } from "./html_parse_visit_attribute_value.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { list_remove } from "./list_remove.mjs";
export async function bible_chapter_parsed(bible_folder, chapter_name) {
  let joined = bible_url_htm(bible_folder, chapter_name);
  let root = await html_cache_parse(joined);
  html_parse_visit_attribute_value(root, "class", "notemark", (v) => {
    let { node } = v;
    let { parent } = node;
    let { children } = parent;
    list_remove(children, node);
  });
  return root;
}
