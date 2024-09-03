import { each_object } from "./each_object.mjs";
import { ceb_bible_words_definitions_map_cache } from "./ceb_bible_words_definitions_map_cache.mjs";
export async function ceb_stem_test() {
  let map = await ceb_bible_words_definitions_map_cache();
  each_object(object, (stem, inputs) => {});
}
