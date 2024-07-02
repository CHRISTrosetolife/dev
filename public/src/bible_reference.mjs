import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function bible_reference(book_name, chapter, verse_number) {
  return string_combine_multiple([book_name, " ", chapter, ":", verse_number]);
}
