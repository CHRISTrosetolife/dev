import { bible_file } from "./bible_file.mjs";
import { html_parse_visit_classes_list } from "./html_parse_visit_classes_list.mjs";
import { list_single } from "./list_single.mjs";
import { html_parse_visit_class_list } from "./html_parse_visit_class_list.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { bible_url_base } from "./bible_url_base.mjs";
export async function bible_books_html_elements(bible_folder) {
  let url_base = bible_url_base(bible_folder);
  let html = await bible_file(bible_folder, chapter_name);
  let root = await html_cache_parse(url_base);
  let vnavs = html_parse_visit_class_list(root, "vnav");
  let vnav = list_single(vnavs);
  let book_elements = html_parse_visit_classes_list(vnav, ["oo", "nn"]);
  return book_elements;
}
