import { bible_books_new_count } from "./bible_books_new_count.mjs";
import { list_take_reverse } from "./list_take_reverse.mjs";
export function list_take_bible_books_new(books) {
  return list_take_reverse(books, bible_books_new_count());
}
