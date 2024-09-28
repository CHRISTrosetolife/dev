import { list_second } from "./list_second.mjs";
import { list_first } from "./list_first.mjs";
import { list_size_2 } from "./list_size_2.mjs";
import { assert } from "./assert.mjs";
import { string_split_colon } from "./string_split_colon.mjs";
export function bible_chapter_verse_parse(chapter_verse) {
  let split2 = string_split_colon(chapter_verse);
  assert(list_size_2, [split2]);
  let chapter_name = list_first(split2);
  let verse_number = list_second(split2);
  return {
    chapter_name,
    verse_number,
  };
}
