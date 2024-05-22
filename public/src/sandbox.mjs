import { ceb_dictionary_words } from "./ceb_dictionary_words.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
export async function sandbox() {
  let dictionary = await ceb_dictionary_words();
  return dictionary
}
