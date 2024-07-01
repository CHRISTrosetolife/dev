import { bible_chapter_name_to_book_code } from "./bible_chapter_name_to_book_code.mjs";
import { html_parse_href } from "./html_parse_href.mjs";
export function bible_books_html_element_to_prefix(e) {
  let href = html_parse_href(e);
  return bible_chapter_name_to_book_code(href);
}
