import { list_size } from "./list_size.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { list_map } from "./list_map.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_set } from "./list_set.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { range } from "./range.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_remove_multiple_at } from "./list_remove_multiple_at.mjs";
import { list_join } from "./list_join.mjs";
import { add_1 } from "./add_1.mjs";
import { list_get } from "./list_get.mjs";
import { list_take } from "./list_take.mjs";
import { subtract } from "./subtract.mjs";
import { list_skip } from "./list_skip.mjs";
import { integer_random } from "./integer_random.mjs";
import { lesson_console_log_quiz_words } from "./lesson_console_log_quiz_words.mjs";
export function lesson_if_else_string_concat_quiz_parts(concat_count) {
  let words_total = 4;
  let words = lesson_console_log_quiz_words();
  if (0) words = ["a", "b", "c", "d", "e", "f", "g"];
  let words_length = list_size(words);
  let count = integer_random(concat_count, words_total);
  let remaining = list_skip(
    words,
    integer_random(0, subtract(words_length, count)),
  );
  let w = list_take(remaining, count);
  while (list_size(w) > concat_count) {
    let i = integer_random(0, list_size(w) - 2);
    let w_i = list_get(w, i);
    let w_j = list_get(w, add_1(i));
    let combined = list_join([w_i, w_j], " ");
    list_remove_multiple_at(w, i, 2);
    list_insert(w, i, combined);
  }
  for (let i of range(list_index_last(w))) {
    list_set(w, i, string_combine(list_get(w, i), " "));
  }
  let mapped = list_map(w, string_delimit);
  return mapped;
}
