import { js_code_push } from "./js_code_push.mjs";
import { integer_random } from "./integer_random.mjs";
import { js_code_length } from "./js_code_length.mjs";
import { js_code_dot } from "./js_code_dot.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { lesson_array_source_get_generic } from "./lesson_array_source_get_generic.mjs";
import { lesson_array_sorted } from "./lesson_array_sorted.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_cycle_code_multiple } from "./html_cycle_code_multiple.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
export function lesson_array_push() {
  let description = "array length";
  let example_message = string_combine("with an ", description);
  let count_max = 4;
  let v = lesson_simple(
    lesson_array_source_get_generic(
      function () {
        let v2 = integer_random(1, count_max);
        return v2;
      },
      function second_get(list_identifier, count) {
        let second = app_learn_code_log(
          js_code_dot(list_identifier, js_code_length()),
        );
        return second;
      },
    ),
    example_before,
    description,
    example_message,
    [lesson_array_sorted(count_max)],
  );
  return v;
  function example_before(parent) {
    html_cycle_code_multiple(parent, [
      string_combine_multiple(["Use `", js_code_push(), "`"]),
    ]);
  }
}
