import { bible_words_eng_symbols } from "./bible_words_eng_symbols.mjs";
import { bible_words_map } from "./bible_words_map.mjs";
import { list_map } from "./list_map.mjs";
import { bible_words_eng_cache } from "./bible_words_eng_cache.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
export async function app_ceb_words_english_without_bible() {
  let all = await bible_words_eng_cache();
  all = bible_words_map(all, bible_words_eng_symbols());
  list_map(engs, (e) => {
    let lower = string_case_lower(e);
  });
}
