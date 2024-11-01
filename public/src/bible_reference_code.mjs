import { bible_reference } from "./bible_reference.mjs";
import { bible_book_name } from "./bible_book_name.mjs";
import { bible_chapter_name_parse } from "./bible_chapter_name_parse.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_single } from "./list_single.mjs";
export function bible_reference_code(chapter_code, verse_numbers) {
  let { book_code, chapter_code: chapter_number } =
    bible_chapter_name_parse(chapter_code);
  let book_name = bible_book_name(book_code);
  let vr;
  if (list_size_1(verse_numbers)) {
    vr = list_single(verse_numbers);
  } else {
  }
  let r = bible_reference(book_name, chapter_number, verse_numbers);
  return r;
}
