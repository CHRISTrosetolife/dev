import { bible_chapter_name_to_code } from "./bible_chapter_name_to_code.mjs";
import { bible_chapter_name_to_book_code } from "./bible_chapter_name_to_book_code.mjs";
export function bible_chapter_name_parse(chapter_name) {
  let book_code = bible_chapter_name_to_book_code(chapter_name);
  let chapter_code = bible_chapter_name_to_code(chapter_name);
  return {
    book_code,
    chapter_code,
  };
}
