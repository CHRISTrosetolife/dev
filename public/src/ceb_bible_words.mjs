import { range } from "./range.mjs";
import { ceb_bible_words_1 } from "./ceb_bible_words_1.mjs";
import { string_count_words } from "./string_count_words.mjs";
import { list_map } from "./list_map.mjs";
import { add_1 } from "./add_1.mjs";
export async function ceb_bible_words() {
  let count = 5;
  range_1(count);
  let text_split = await ceb_bible_words_1();
  let mapped = string_count_words(text_split);
  return mapped;
}
function range_1(count) {
   return list_map(range(count), add_1);
}

