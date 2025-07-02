import { object_property_get } from "./object_property_get.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_take_bible_books_new_context } from "./list_take_bible_books_new_context.mjs";
export function list_take_bible_books_new_context_random(context) {
  let books_new = list_take_bible_books_new_context(context);
  let book = list_random_item(books_new);
  let book_code = object_property_get(book, "book_code");
  return book_code;
}
