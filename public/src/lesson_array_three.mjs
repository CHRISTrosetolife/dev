import { lesson_array_two_indices } from "./lesson_array_two_indices.mjs";
import { html_cycle_code_multiple } from "./html_cycle_code_multiple.mjs";
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
    [],
  );
  return v;
  function example_before(parent) {
    html_cycle_code_multiple(parent, [
      "Remember:",
      lesson_array_two_indices(),
      "Threfore:",
      "the number `2` refers to the third element",
      ,
    ]);
  }
}
