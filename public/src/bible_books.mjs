import { bible_books_generic } from "./bible_books_generic.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { bible_books_html_elements } from "./bible_books_html_elements.mjs";
export async function bible_books(bible_folder) {
  assert_arguments_length(arguments, 1);
  let elements_get = bible_books_html_elements;
  let v = await bible_books_generic(bible_folder, elements_get);
  return v;
}
