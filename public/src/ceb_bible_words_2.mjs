import { url_secure_w3 } from "./url_secure_w3.mjs";
import { string_count_words } from "./string_count_words.mjs";
import { string_combine } from "./string_combine.mjs";
import { http_cache } from "./http_cache.mjs";
export async function ceb_bible_words_2() {
  let url = string_combine(url_secure_w3(), "talibon.com/bible/bible.html");
  let text = await http_cache(url);
  return text;
  let mapped = string_count_words(text_split);
  return mapped;
}
