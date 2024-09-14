import { list_index } from "./list_index.mjs";
import { bible_books } from "./bible_books.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { bible_books_names_lookup_inverted } from "./bible_books_names_lookup_inverted.mjs";
export async function bible_book_prefix_to_number(bible_folder, book) {
  let inverted = await bible_books_names_lookup_inverted(bible_folder);
  let acronym = object_property_get(inverted, book);
  let books = await bible_books(bible_folder);
  let n = list_index(books, acronym) + 1;
  return n;
}
