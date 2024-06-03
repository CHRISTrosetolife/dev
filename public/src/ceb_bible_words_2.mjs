import { html_parse_visit_tag } from "./html_parse_visit_tag.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { url_secure_w3 } from "./url_secure_w3.mjs";
import { string_count_words } from "./string_count_words.mjs";
import { string_combine } from "./string_combine.mjs";
export async function ceb_bible_words_2() {
  let url = string_combine(url_secure_w3(), "talibon.com/bible/bible.html");
  let root = await html_cache_parse(url);
  html_parse_visit_tag(root, "a", (v) => {
    let node = v;
  });
  return root;
  let mapped = string_count_words(text_split);
  return mapped;
}
