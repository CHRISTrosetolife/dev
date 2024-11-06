import { string_trim_front_0 } from "./string_trim_front_0.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function bible_reference(book_name, chapter, verse_number) {
  chapter = string_trim_front_0(chapter);
  return string_combine_multiple([book_name, " ", chapter, ":", verse_number]);
}
