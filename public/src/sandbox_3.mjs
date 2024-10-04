import { object_property_get } from "./object_property_get.mjs";
import { ceb_bible_words_definitions_all_cache } from "./ceb_bible_words_definitions_all_cache.mjs";
export async function sandbox_3() {
  let c = await ceb_bible_words_definitions_all_cache();
  object_property_get(object, "property_name");
}
