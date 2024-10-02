import { assert } from "./assert.mjs";
import { bible_books } from "./bible_books.mjs";
import { bible_search_generic } from "./bible_search_generic.mjs";
import { list_includes } from "./list_includes.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export async function bible_search_book(books, words) {
  let book = books;
  let all = await bible_books("engbsb");
  assert(list_includes, [all, book]);
  return await bible_search_generic(words, (chapter_code, verse_number) => {
    return string_starts_with(chapter_code, book);
  });
}
