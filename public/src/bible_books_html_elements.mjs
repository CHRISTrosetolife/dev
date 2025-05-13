import { bible_file_html_parse } from "./bible_file_html_parse.mjs";
import { html_parse_visit_classes_list } from "./html_parse_visit_classes_list.mjs";
import { list_single } from "./list_single.mjs";
import { html_parse_visit_class_list } from "./html_parse_visit_class_list.mjs";
export async function bible_books_html_elements(bible_folder) {
  let root = await bible_file_html_parse(bible_folder, "index");
  let vnavs = html_parse_visit_class_list(root, "vnav");
  let vnav = list_single(vnavs);
  let classes = ["oo", "aa", "nn"];
  let book_elements = html_parse_visit_classes_list(vnav, classes);
  return book_elements;
}
