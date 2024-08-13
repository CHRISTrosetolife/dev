import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { string_whitespace_normalize } from "./string_whitespace_normalize.mjs";
import { string_replace_multiple } from "./string_replace_multiple.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
import { string_take } from "./string_take.mjs";
import { string_skip } from "./string_skip.mjs";
import { string_index } from "./string_index.mjs";
import { http_cache } from "./http_cache.mjs";
import { url_secure_w3 } from "./url_secure_w3.mjs";
import { string_combine } from "./string_combine.mjs";
export async function ceb_bible_words_1(args) {
  let url = string_combine(
    url_secure_w3(),
    "ccel.org/ccel/b/bible/ceb_p/cache/ceb_p.txt",
  );
  let text = await http_cache(url);
  let verse_1 = "^1";
  let index = string_index(text, verse_1);
  text = string_skip(text, index);
  let end = "This document is from the Christian Classics Ethereal";
  let index_end = string_index(text, end);
  text = string_take(text, index_end);
  let replace = "_,;:!?.'\"()¶/`^|0123456789";
  let replace_list = string_split_empty(replace);
  let replacement = " ";
  text = string_replace_multiple(text, replace_list, replacement);
  text = string_whitespace_normalize(text);
  text = string_case_lower(text);
  text = string_trim_whitespace(text);
  let text_split = string_split_space(text);
  return text_split;
}
