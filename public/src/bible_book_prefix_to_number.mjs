import { list_index } from "./list_index.mjs";
import { list_map_lower } from "./list_map_lower.mjs";
import { log } from "./log.mjs";
import { bible_book_name_to_number } from "./bible_book_name_to_number.mjs";
import { string_starts_with_curry } from "./string_starts_with_curry.mjs";
import { list_find } from "./list_find.mjs";
import { bible_books_names_lookup_inverted } from "./bible_books_names_lookup_inverted.mjs";
import { object_properties } from "./object_properties.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
export async function bible_book_prefix_to_number(bible_folder, book_prefix) {
  let inverted = await bible_books_names_lookup_inverted(bible_folder);
  let keys = object_properties(inverted);
  let keys_lower = list_map_lower(keys);
  book_prefix = string_case_lower(book_prefix);
  let book = list_find(keys_lower, string_starts_with_curry(book_prefix));
  list_index(keys_lower, book);
  log({
    book,
  });
  return await bible_book_name_to_number(bible_folder, book);
}
