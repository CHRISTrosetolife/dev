import { ceb_bible_words_definitions_all_cache } from "./ceb_bible_words_definitions_all_cache.mjs";
import { list_find_property } from "./list_find_property.mjs";
export async function sandbox_3() {
  let c = await ceb_bible_words_definitions_all_cache();
  return list_find_property(c, "word", "atngal");
}
