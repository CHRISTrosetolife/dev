import { html_cycle_code_multiple } from "./html_cycle_code_multiple.mjs";
import { html_span_text } from "./html_span_text.mjs";
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
    html_span_text(parent, "Remember:");
    html_cycle_code_multiple(parent, [
      "to tell javascript that you want the first element in an array , you use the number `0` , not the number `1`",
      "the number `0` refers to the first element",
      "the number `1` refers to the second element",
      "here is some example code :",
    ]);
  }
}
