import { list_find_mapped } from "./list_find_mapped.mjs";
import { log } from "./log.mjs";
import { bible_book_name_to_number } from "./bible_book_name_to_number.mjs";
import { string_starts_with_curry } from "./string_starts_with_curry.mjs";
import { bible_books_names_lookup_inverted } from "./bible_books_names_lookup_inverted.mjs";
import { object_properties } from "./object_properties.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
export async function bible_book_prefix_to_number(bible_folder, book_prefix) {
  let inverted = await bible_books_names_lookup_inverted(bible_folder);
  let keys = object_properties(inverted);
  let predicate = string_starts_with_curry(book_prefix);
  let mapper = string_case_lower;
  book_prefix = mapper(book_prefix);
  let book = list_find_mapped(keys, mapper, predicate, book_prefix);
  log({
    book,
  });
  return await bible_book_name_to_number(bible_folder, book);
}
