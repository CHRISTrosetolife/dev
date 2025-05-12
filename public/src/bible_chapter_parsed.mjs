import { bible_file_html_parse } from "./bible_file_html_parse.mjs";
import { bible_url_htm } from "./bible_url_htm.mjs";
import { html_parse_visit_attribute_value } from "./html_parse_visit_attribute_value.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { list_remove } from "./list_remove.mjs";
export async function bible_chapter_parsed(bible_folder, chapter_name) {
    chapter_name = string_case_upper(chapter_name);
  let root;
  let download_without_using_zip = false;
  if (download_without_using_zip) {
    let joined = bible_url_htm(bible_folder, chapter_name);
    root = await html_cache_parse(joined);
  }
  root = await bible_file_html_parse(bible_folder, chapter_name);
  html_parse_visit_attribute_value(root, "class", "notemark", (v) => {
    let { node } = v;
    let { parent } = node;
    let { children } = parent;
    list_remove(children, node);
  });
  return root;
}
