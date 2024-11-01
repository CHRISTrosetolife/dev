import { list_last } from "./list_last.mjs";
import { list_join_dash } from "./list_join_dash.mjs";
import { bible_reference } from "./bible_reference.mjs";
import { bible_book_name } from "./bible_book_name.mjs";
import { bible_chapter_name_parse } from "./bible_chapter_name_parse.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_single } from "./list_single.mjs";
import { list_first } from "./list_first.mjs";
export function bible_reference_code(chapter_code, verse_numbers) {
  let { book_code, chapter_code: chapter_number } =
    bible_chapter_name_parse(chapter_code);
  let book_name = bible_book_name(book_code);
  let vr;
  if (list_size_1(verse_numbers)) {
    vr = list_single(verse_numbers);
  } else {
    vr = list_join_dash([list_first(verse_numbers), list_last(verse_numbers)]);
  }
  let r = bible_reference(book_name, chapter_number, vr);
  return r;
}
