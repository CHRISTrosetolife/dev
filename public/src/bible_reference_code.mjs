import { bible_reference } from "./bible_reference.mjs";
import { bible_book_name } from "./bible_book_name.mjs";
import { bible_chapter_name_parse } from "./bible_chapter_name_parse.mjs";
export function bible_reference_code(chapter_code, verse_number) {
  let { book_code, chapter_code: chapter_number } =
    bible_chapter_name_parse(chapter_code);
  let book_name = bible_book_name(book_code);
  let r = bible_reference(book_name, chapter_number, verse_number);
  return r;
}
