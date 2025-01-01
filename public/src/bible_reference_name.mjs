import { bible_book_name } from "./bible_book_name.mjs";
import { bible_reference } from "./bible_reference.mjs";
export function bible_reference_name(book_code, chapter, verse_number) {
  return bible_reference(bible_book_name(book_code), chapter, verse_number);
}
