import { string_skip } from "./string_skip.mjs";
import { string_index } from "./string_index.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { string_whitespace_normalize } from "./string_whitespace_normalize.mjs";
import { string_replace_multiple } from "./string_replace_multiple.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
import { http_cache } from "./http_cache.mjs";
export async function sandbox() {
  let url = "https://www.ccel.org/ccel/b/bible/ceb_p/cache/ceb_p.txt";
  let text = await http_cache(url);
  const verse_1 = "^1";
  let index = string_index(text, verse_1);
  text = string_skip(text, index);
  let replace = "_,;:!?.'\"()¶/`^|0123456789";
  let replace_list = string_split_empty(replace);
  const replacement = " ";
  text = string_replace_multiple(text, replace_list, replacement);
  text = string_whitespace_normalize(text);
  text = string_case_lower(text);
  let text_split = string_split_space(text);
  return text_split;
}
