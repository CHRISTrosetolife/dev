import { lesson_if_else_string_concat_variables_quiz } from "./lesson_if_else_string_concat_variables_quiz.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { identity } from "./identity.mjs";
import { list_map } from "./list_map.mjs";
import { string_delimit } from "./string_delimit.mjs";
export function lesson_if_else_string_concat_variable() {
  let description = "string combined a variable";
  let example_message = string_combine("with ", description);
  return lesson_simple(
    function () {
      let strings = app_learn_code_random_identifiers(2);
      list_sort_string(strings, identity);
      let mapped = list_map(strings, string_delimit)
      return lesson_if_else_string_concat_variables_quiz(1);
    },
    example_before,
    description,
    example_message,
    [],
  );
  function example_before(parent) {
    html_style_alternate_monospace_short(
      parent,
      "strings can be concatentated with a variable",
    );
  }
}
