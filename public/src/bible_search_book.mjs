import { bible_search_generic } from "./bible_search_generic.mjs";
import { tautology } from "./tautology.mjs";
export async function bible_search_book(words) {
  return await bible_search_generic(words, tautology);
}
