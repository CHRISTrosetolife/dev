import { list_map } from "./list_map.mjs";
import { bible_words_eng_cache } from "./bible_words_eng_cache.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
export async function app_ceb_words_english_without_bible() {
  let engs = await bible_words_eng_cache();
  list_map(engs, (e) => {
    let lower = string_case_lower(e);
  });
}
