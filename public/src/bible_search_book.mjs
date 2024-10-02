import { assert } from "./assert.mjs";
import { bible_books } from "./bible_books.mjs";
import { bible_search_generic } from "./bible_search_generic.mjs";
import { list_includes } from "./list_includes.mjs";
import { string_case_upper } from "./string_case_upper.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { string_take } from "./string_take.mjs";
export async function bible_search_book(books, words) {
  let book = books;
  book = string_case_upper(book);
  book=string_take(book, 3)
  let all = await bible_books("engbsb");
  assert(list_includes, [all, book]);
  return await bible_search_generic(words, (chapter_code, verse_number) => {
    return string_starts_with(chapter_code, book);
  });
}
