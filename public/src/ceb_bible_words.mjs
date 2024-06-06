import { list_map } from "./list_map.mjs";
import { range_1 } from "./range_1.mjs";
import { ceb_bible_words_1 } from "./ceb_bible_words_1.mjs";
import { string_count_words } from "./string_count_words.mjs";
export async function ceb_bible_words() {
  let count = 5;
  list_map(range_1(count));
  let text_split = await ceb_bible_words_1();
  let mapped = string_count_words(text_split);
  return mapped;
}
