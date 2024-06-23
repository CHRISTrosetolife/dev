import { bible_books_html_element_to_prefix } from "./bible_books_html_element_to_prefix.mjs";
import { bible_books_html_elements } from "./bible_books_html_elements.mjs";
import { list_map } from "./list_map.mjs";
export async function bible_books(bible_folder) {
  let book_elements = await bible_books_html_elements(bible_folder);
  let book_prefixes = list_map(
    book_elements,
    bible_books_html_element_to_prefix,
  );
  return book_prefixes;
}
