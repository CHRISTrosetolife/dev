import { string_case_upper } from "./string_case_upper.mjs";
import { bible_books_prefix_to_name } from "./bible_books_prefix_to_name.mjs";
export function bible_book_name(book_id) {
  return bible_books_prefix_to_name()[string_case_upper(book_id)];
}
