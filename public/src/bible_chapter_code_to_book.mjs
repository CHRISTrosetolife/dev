import { string_take } from "./string_take.mjs";
export function bible_chapter_code_to_book(href) {
  return string_take(href, 3);
}
