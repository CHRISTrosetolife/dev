import { list_take_reverse } from "./list_take_reverse.mjs";
import { bible_interlinear_cache } from "./bible_interlinear_cache.mjs";
export async function bible_interlinear_cache_old() {
  let books = await bible_interlinear_cache();
  let new_testament_books = list_take_reverse(books, 27);
  return new_testament_books;
}
