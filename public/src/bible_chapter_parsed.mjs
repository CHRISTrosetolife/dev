import { html_parse } from "./html_parse.mjs";
import { bible_chapter_path } from "./bible_chapter_path.mjs";
import { bible_url_htm } from "./bible_url_htm.mjs";
import { html_parse_visit_attribute_value } from "./html_parse_visit_attribute_value.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { list_remove } from "./list_remove.mjs";
import { file_read } from "./file_read.mjs";
export async function bible_chapter_parsed(bible_folder, chapter_name) {
  let download_without_using_zip = false;
  if (false) {
    let joined = bible_url_htm(bible_folder, chapter_name);
    let root = await html_cache_parse(joined);
  }
  let html = await file_read(
    await bible_chapter_path(bible_folder, chapter_name),
  );
  let root = await html_parse(html);
  html_parse_visit_attribute_value(root, "class", "notemark", (v) => {
    let { node } = v;
    let { parent } = node;
    let { children } = parent;
    list_remove(children, node);
  });
  return root;
}
