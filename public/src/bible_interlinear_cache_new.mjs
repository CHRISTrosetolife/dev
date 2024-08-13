import { list_take_bible_books_new } from "./list_take_bible_books_new.mjs";
import { bible_interlinear_cache } from "./bible_interlinear_cache.mjs";
export async function bible_interlinear_cache_new() {
  let books = await bible_interlinear_cache();
  let new_testament_books = list_take_bible_books_new(books);
  return new_testament_books;
}
