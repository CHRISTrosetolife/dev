import { object_property_get } from "./object_property_get.mjs";
import { string_case_upper } from "./string_case_upper.mjs";
import { bible_books_prefix_to_name } from "./bible_books_prefix_to_name.mjs";
export function bible_book_name(book_id) {
  object_property_get(object, property_name);
  return bible_books_prefix_to_name()[string_case_upper(book_id)];
}
