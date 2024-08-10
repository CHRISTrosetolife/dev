import { bible_books_new_count } from "./bible_books_new_count.mjs";
import { list_size } from "./list_size.mjs";
import { list_take } from "./list_take.mjs";
import { bible_interlinear_cache } from "./bible_interlinear_cache.mjs";
export async function bible_interlinear_cache_old() {
  let books = await bible_interlinear_cache();
  let c = bible_books_new_count();
  let old_testament_books = list_take(books, list_size(books) - c);
  return old_testament_books;
}
