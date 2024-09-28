import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function bible_book_to_reference_prefix(book) {
  return string_combine_multiple([book, " "]);
}
