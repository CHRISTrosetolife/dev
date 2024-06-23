import { html_parse_href } from "./html_parse_href.mjs";
import { string_take } from "./string_take.mjs";
export function bible_books_html_element_to_prefix(e) {
  return string_take(html_parse_href(e), 3);
}
