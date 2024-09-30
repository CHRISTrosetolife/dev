import { bible_search_generic } from "./bible_search_generic.mjs";
import { tautology } from "./tautology.mjs";
export async function bible_search(words) {
  let filter = tautology;
  return await bible_search_generic(words, filter);
}
