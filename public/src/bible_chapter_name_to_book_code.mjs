import { bible_book_code_size } from "./bible_book_code_size.mjs";
import { string_take } from "./string_take.mjs";
export function bible_chapter_name_to_book_code(href) {
  return string_take(href, bible_book_code_size());
}
