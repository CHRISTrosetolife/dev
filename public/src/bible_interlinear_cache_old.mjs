import { list_size } from "./list_size.mjs";
import { list_take } from "./list_take.mjs";
import { bible_interlinear_cache } from "./bible_interlinear_cache.mjs";
export async function bible_interlinear_cache_old() {
  let books = await bible_interlinear_cache();
  let new_testament_books = list_take(books, list_size(books) - 27);
  return new_testament_books;
}
