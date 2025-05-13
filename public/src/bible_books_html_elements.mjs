import { ebible_class_apocrypha } from "./ebible_class_apocrypha.mjs";
import { bible_books_html_elements_generic } from "./bible_books_html_elements_generic.mjs";
export async function bible_books_html_elements(bible_folder) {
  let classes = ["oo", ebible_class_apocrypha(), "nn"];
  let v = await bible_books_html_elements_generic(bible_folder, classes);
  return v;
}
