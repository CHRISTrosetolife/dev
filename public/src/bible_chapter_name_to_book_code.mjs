import { string_take } from "./string_take.mjs";
export function bible_chapter_name_to_book_code(href) {
  return string_take(href, 3);
}
