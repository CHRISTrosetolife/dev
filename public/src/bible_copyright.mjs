import { html_parse_visit_class_list } from "./html_parse_visit_class_list.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { bible_url_htm } from "./bible_url_htm.mjs";
export async function bible_copyright(bible_folder) {
  let url = bible_url_htm(bible_folder, "copyright");
  let root = await html_cache_parse(url);
  return html_parse_visit_class_list(root, "main");
}
