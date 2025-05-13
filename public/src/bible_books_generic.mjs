import { bible_books_html_element_to_prefix } from "./bible_books_html_element_to_prefix.mjs";
import { list_map } from "./list_map.mjs";
export async function bible_books_generic(bible_folder, elements_get) {
  let book_elements = await elements_get(bible_folder);
  let book_prefixes = list_map(
    book_elements,
    bible_books_html_element_to_prefix,
  );
  return book_prefixes;
}
