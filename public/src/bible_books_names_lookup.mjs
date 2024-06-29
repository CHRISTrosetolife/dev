import { html_parse_text } from "./html_parse_text.mjs";
import { bible_books_html_element_to_prefix } from "./bible_books_html_element_to_prefix.mjs";
import { list_to_lookup_key_value } from "./list_to_lookup_key_value.mjs";
import { bible_books_html_elements } from "./bible_books_html_elements.mjs";
export async function bible_books_names_lookup(bible_folder) {
  let book_elements = await bible_books_html_elements(bible_folder);
  let lookup = list_to_lookup_key_value(
    book_elements,
    bible_books_html_element_to_prefix,
    html_parse_text,
  );
  return lookup;
}
