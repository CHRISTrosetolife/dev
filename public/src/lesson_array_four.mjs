import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { lesson_array_source_get } from "./lesson_array_source_get.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
export function lesson_array_four() {
  let count = 3;
  let description = string_combine_multiple(["array with ", count, " items"]);
  let example_message = string_combine("with an ", description);
  let v = lesson_simple(
    lesson_array_source_get(count),
    example_before,
    description,
    example_message,
    [],
  );
  return v;
  function example_before(parent) {}
}
