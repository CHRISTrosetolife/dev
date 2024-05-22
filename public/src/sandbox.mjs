import { ceb_dictionary_words } from "./ceb_dictionary_words.mjs";
export async function sandbox() {
  let dictionary = await ceb_dictionary_words();
}
