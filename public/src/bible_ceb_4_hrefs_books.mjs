import { list_remove } from "./list_remove.mjs";
import { tautology } from "./tautology.mjs";
import { html_parse_a_hrefs } from "./html_parse_a_hrefs.mjs";
import { html_parse_visit_class_single } from "./html_parse_visit_class_single.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { bible_ceb_4_url_base } from "./bible_ceb_4_url_base.mjs";
export async function bible_ceb_4_hrefs_books() {
  let url_base = bible_ceb_4_url_base();
  let root_bible = await html_cache_parse(url_base);
  let s = html_parse_visit_class_single(
    root_bible,
    "ym-grid linearize-level-2",
  );
  let book_hrefs = html_parse_a_hrefs(s, tautology);
  list_remove(book_hrefs, "index_en.htm#1");
  return book_hrefs;
}
