import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { bible_search_generic } from "./bible_search_generic.mjs";
import { tautology } from "./tautology.mjs";
export async function bible_search(words) {
  assert_arguments_length(arguments, 1);
  return await bible_search_generic(words, tautology);
}
