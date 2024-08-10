import { bible_books_new_count } from "./bible_books_new_count.mjs";
import { list_take_reverse } from "./list_take_reverse.mjs";
import { bible_interlinear_cache } from "./bible_interlinear_cache.mjs";
export async function bible_interlinear_cache_new() {
  let books = await bible_interlinear_cache();
  let new_testament_books = list_take_reverse(books, bible_books_new_count());
  return new_testament_books;
}
