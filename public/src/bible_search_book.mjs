import { bible_search_generic } from "./bible_search_generic.mjs";
export async function bible_search_book(words, books) {
  return await bible_search_generic(words, () => {});
}
