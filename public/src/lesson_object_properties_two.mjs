import { js_code_braces } from "./js_code_braces.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { app_learn_code_random_identifiers } from "./app_learn_code_random_identifiers.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { identity } from "./identity.mjs";
import { list_get } from "./list_get.mjs";
export function lesson_object_properties_two() {
  let description = "object with two properties";
  let example_message = string_combine("with an ", description);
  return lesson_simple(
    function () {
      let identifiers = app_learn_code_random_identifiers(3);
      let a = list_get(identifiers, 0);
      let b = list_get(identifiers, 1);
      let c = list_get(identifiers, 2);
      list_sort_string(identifiers, identity);
      let lines = [
        js_code_statement_let_assign(a, js_code_braces()),
        app_learn_code_log(`counter`),
      ];
      return list_join_newline(lines);
    },
    example_before,
    description,
    example_message,
    [],
  );
  function example_before(parent) {}
}
