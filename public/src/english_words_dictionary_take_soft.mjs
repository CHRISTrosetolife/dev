import { list_take_soft } from "./list_take_soft.mjs";
import { english_words_dictionary } from "./english_words_dictionary.mjs";
export async function english_words_dictionary_take_soft(limit) {
  let filtered2 = await english_words_dictionary();
  let taken = list_take_soft(filtered2, limit);
  return taken;
}
