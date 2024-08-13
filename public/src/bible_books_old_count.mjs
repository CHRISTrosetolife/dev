import { bible_books_new_count } from "./bible_books_new_count.mjs";
import { bible_books_count } from "./bible_books_count.mjs";
export function bible_books_old_count() {
  return bible_books_count() - bible_books_new_count();
}
