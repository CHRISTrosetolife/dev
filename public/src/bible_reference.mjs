import { string_trim_front } from "./string_trim_front.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function bible_reference(book_name, chapter, verse_number) {
  chapter = string_trim_front(chapter, "0");
  return string_combine_multiple([book_name, " ", chapter, ":", verse_number]);
}
