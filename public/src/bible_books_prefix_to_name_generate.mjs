import { list_to_lookup_value } from "./list_to_lookup_value.mjs";
import { bible_books_html_element_to_prefix } from "./bible_books_html_element_to_prefix.mjs";
import { bible_books_html_elements } from "./bible_books_html_elements.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
export async function bible_books_prefix_to_name_generate() {
  let book_elements = await bible_books_html_elements("engbsb");
  return list_to_lookup_value(book_elements, (b) => ({
    prefix: bible_books_html_element_to_prefix(b),
    name: html_parse_text(b),
  }));
}
