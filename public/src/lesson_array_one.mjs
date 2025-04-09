import { lesson_array_source_get_count } from "./lesson_array_source_get_count.mjs";
import { noop } from "./noop.mjs";
import { number_to_words } from "./number_to_words.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
export function lesson_array_one() {
  let count = 1;
  let description = string_combine_multiple([
    "array with ",
    number_to_words(count),
    " item",
  ]);
  let example_message = string_combine("with an ", description);
  let v = lesson_simple(
    lesson_array_source_get_count(count),
    noop,
    description,
    example_message,
    [],
  );
  return v;
}
