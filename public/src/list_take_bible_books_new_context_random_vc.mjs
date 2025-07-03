import { bible_chapter_code_1 } from "./bible_chapter_code_1.mjs";
import { list_take_bible_books_new_context_random } from "./list_take_bible_books_new_context_random.mjs";
export function list_take_bible_books_new_context_random_vc(context) {
  let book_code = list_take_bible_books_new_context_random(context);
  let chapter_code = bible_chapter_code_1();
  let verse_number_next = "1";
  return {
    book_code,
    chapter_code,
    verse_number_next,
  };
}
