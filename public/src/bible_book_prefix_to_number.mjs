import { bible_book_name_to_number } from "./bible_book_name_to_number.mjs";
import { string_starts_with_curry } from "./string_starts_with_curry.mjs";
import { list_find } from "./list_find.mjs";
import { list_index } from "./list_index.mjs";
import { bible_books } from "./bible_books.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { bible_books_names_lookup_inverted } from "./bible_books_names_lookup_inverted.mjs";
import { object_properties } from "./object_properties.mjs";
export async function bible_book_prefix_to_number(bible_folder, book_prefix) {
  let inverted = await bible_books_names_lookup_inverted(bible_folder);
  let keys = object_properties(inverted);
  let book = list_find(keys, string_starts_with_curry(book_prefix));
  let acronym = object_property_get(inverted, book);
  let books = await bible_books(bible_folder);
  let n = list_index(books, acronym) + 1;
  return await bible_book_name_to_number();
}
