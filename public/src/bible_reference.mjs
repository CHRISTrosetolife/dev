import { string_prefix_without_multiple } from "./string_prefix_without_multiple.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function bible_reference(book_name, chapter, verse_number) {
  chapter = string_prefix_without_multiple(chapter, "0");
  return string_combine_multiple([book_name, " ", chapter, ":", verse_number]);
}
