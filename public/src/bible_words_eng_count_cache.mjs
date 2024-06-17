import { bible_words_eng_count } from "./bible_words_eng_count.mjs";
import { function_cache } from "./function_cache.mjs";
export async function bible_words_eng_count_cache() {
  return await function_cache(bible_words_eng_count, []);
}
