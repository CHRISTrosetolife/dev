import { list_take_but } from "./list_take_but.mjs";
import { bible_books_new_count } from "./bible_books_new_count.mjs";
import { bible_interlinear_cache } from "./bible_interlinear_cache.mjs";
export async function bible_interlinear_cache_old() {
  let books = await bible_interlinear_cache();
  let c = bible_books_new_count();
  let old_testament_books = list_take_but(books, c);
  return old_testament_books;
}
