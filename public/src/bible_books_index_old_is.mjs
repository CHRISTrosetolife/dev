import { bible_books_old_count } from "./bible_books_old_count.mjs";
export function bible_books_index_old_is(parsed) {
  let old_count = bible_books_old_count();
  let old_is = parsed <= old_count;
  return old_is;
}
