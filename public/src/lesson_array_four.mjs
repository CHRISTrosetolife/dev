import { lesson_array_source_get } from "./lesson_array_source_get.mjs";
import { noop } from "./noop.mjs";
import { lesson_array_sorted } from "./lesson_array_sorted.mjs";
import { number_to_words } from "./number_to_words.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
export function lesson_array_four() {
  let count = 4;
  let description = string_combine_multiple([
    "array with ",
    number_to_words(count),
    " items",
  ]);
  let example_message = string_combine("with an ", description);
  let v = lesson_simple(
    lesson_array_source_get(count),
    noop,
    description,
    example_message,
    [lesson_array_sorted(count)],
  );
  return v;
}
