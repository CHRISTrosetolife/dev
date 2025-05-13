import { ebible_class_apocrypha } from "./ebible_class_apocrypha.mjs";
import { bible_books_html_elements_generic } from "./bible_books_html_elements_generic.mjs";
import { bible_books_generic } from "./bible_books_generic.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function bible_books_apocrypha(bible_folder) {
  assert_arguments_length(arguments, 1);
  let elements_get = await bible_books_html_elements_generic(bible_folder, [
    ebible_class_apocrypha(),
  ]);
  let v = await bible_books_generic(bible_folder, elements_get);
  return v;
}
