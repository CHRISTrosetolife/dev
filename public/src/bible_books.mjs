import { bible_books_html_elements } from "./bible_books_html_elements.mjs";
import { list_map } from "./list_map.mjs";
import { html_parse_href } from "./html_parse_href.mjs";
import { string_take } from "./string_take.mjs";
export async function bible_books(bible_folder) {
  let book_elements = await bible_books_html_elements(bible_folder);
  let book_chapter_ones = list_map(book_elements, (e) => html_parse_href(e));
  let book_prefixes = list_map(book_chapter_ones, (s) => string_take(s, 3));
  return book_prefixes;
}
