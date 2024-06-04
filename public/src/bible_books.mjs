import { html_parse_visit_class_list } from "./html_parse_visit_class_list.mjs";
import { list_single } from "./list_single.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { bible_url_base } from "./bible_url_base.mjs";
export async function bible_books(bible_folder) {
  let url_base = bible_url_base(bible_folder);
  let root = await html_cache_parse(url_base);
  let vnavs = html_parse_visit_class_list(root, "vnav");
  let vnav = list_single(vnavs);
}
