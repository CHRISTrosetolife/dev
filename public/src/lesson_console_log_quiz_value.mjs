import { list_join_space } from "./list_join_space.mjs";
import { lesson_console_log_quiz_words } from "./lesson_console_log_quiz_words.mjs";
import { list_slice } from "./list_slice.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { list_length } from "./list_length.mjs";
import { integer_random } from "./integer_random.mjs";
import { string_delimit } from "./string_delimit.mjs";
export function lesson_console_log_quiz_value() {
  let words = lesson_console_log_quiz_words();
  let word_count = integer_random(2, 4);
  let length = list_length(words);
  let high = subtract(length, word_count);
  let index = integer_random(0, high);
  let end = add(index, word_count);
  let sliced = list_slice(words, index, end);
  let message = list_join_space(sliced);
  let value = string_delimit(message);
  return value;
}
