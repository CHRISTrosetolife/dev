import { lesson_array_source_get } from "./lesson_array_source_get.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
export function lesson_array_three() {
  let description = "array with three items";
  let example_message = string_combine("with an ", description);
  let count = 3;
  let v = lesson_simple(
    lesson_array_source_get(count),
    example_before,
    description,
    example_message,
    [screen1, screen2, screen3],
  );
  return v;
  function example_before(parent) {}
}
