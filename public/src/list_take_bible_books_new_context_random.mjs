import { list_random_item } from "./list_random_item.mjs";
import { list_take_bible_books_new_context } from "./list_take_bible_books_new_context.mjs";
export function list_take_bible_books_new_context_random(context) {
  let books_new = list_take_bible_books_new_context(context);
  let book = list_random_item(books_new);
  return book;
}
