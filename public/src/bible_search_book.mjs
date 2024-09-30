import { bible_search_generic } from "./bible_search_generic.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export async function bible_search_book(books, words) {
  return await bible_search_generic(words, (chapter_code, verse_number) => {
    return string_starts_with(chapter_code, books);
  });
}
