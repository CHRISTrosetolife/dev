import { bible_words_eng } from "./bible_words_eng.mjs";
import { function_cache } from "./function_cache.mjs";
export async function bible_words_eng_cache() {
  return await function_cache(bible_words_eng, []);
}
