import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { bible_books_html_element_to_prefix } from "./bible_books_html_element_to_prefix.mjs";
import { bible_books_html_elements } from "./bible_books_html_elements.mjs";
import { list_map } from "./list_map.mjs";
export async function bible_books(bible_folder) {
  assert_arguments_length(arguments, 1);
  let elements_get = bible_books_html_elements;
  return await bible_books_generic(elements_get, bible_folder);
}
async function bible_books_generic(elements_get, bible_folder) {
    let book_elements = await elements_get(bible_folder);
    let book_prefixes = list_map(
        book_elements,
        bible_books_html_element_to_prefix
    );
    return book_prefixes;
}

