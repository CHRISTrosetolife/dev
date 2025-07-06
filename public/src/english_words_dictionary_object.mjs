import { english_words_dictionary } from "./english_words_dictionary.mjs";
export async function english_words_dictionary_object() {
  let words = await english_words_dictionary();
  let v = {
    words,
  };
  return v;
}
