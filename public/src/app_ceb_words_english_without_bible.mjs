import { list_to_lookup } from "./list_to_lookup.mjs";
import { app_ceb_words_english } from "./app_ceb_words_english.mjs";
import { bible_words_eng_symbols } from "./bible_words_eng_symbols.mjs";
import { bible_words_map } from "./bible_words_map.mjs";
import { bible_words_eng_cache } from "./bible_words_eng_cache.mjs";
import { list_filter } from "./list_filter.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export async function app_ceb_words_english_without_bible() {
  let cebs = await app_ceb_words_english();
  let all = await bible_words_eng_cache();
  all = bible_words_map(all, bible_words_eng_symbols());
  let lookup = list_to_lookup(all);
  let filtered = list_filter(cebs, (c) => !object_property_exists(lookup, c));
  return filtered;
}
