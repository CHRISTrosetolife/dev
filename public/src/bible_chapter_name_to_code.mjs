import { bible_book_code_size } from "./bible_book_code_size.mjs";
import { string_skip } from "./string_skip.mjs";
export function bible_chapter_name_to_code(chapter_name) {
  return string_skip(chapter_name, bible_book_code_size());
}
