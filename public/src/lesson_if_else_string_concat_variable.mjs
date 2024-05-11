import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_log_join_plus } from "./app_learn_code_log_join_plus.mjs";
import { js_code_statement_let_assign_multiple } from "./js_code_statement_let_assign_multiple.mjs";
import { app_learn_code_random_identifiers } from "./app_learn_code_random_identifiers.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { identity } from "./identity.mjs";
import { list_map } from "./list_map.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { list_add } from "./list_add.mjs";
import { list_scramble } from "./list_scramble.mjs";
export function lesson_if_else_string_concat_variable() {
  let description = "string combined a variable";
  let example_message = string_combine("with ", description);
  return lesson_simple(
    function () {
      let strings = app_learn_code_random_identifiers(2);
      list_sort_string(strings, identity);
      let [m, n] = list_map(strings, string_delimit);
      let names = app_learn_code_random_identifiers(1);
      let parts = [n];
      for (let name of names) {
        list_add(parts, name);
      }
      list_scramble(parts);
      let lines = [];
      list_add(lines, js_code_statement_let_assign_multiple(names, [m]));
      list_add(lines, app_learn_code_log_join_plus(parts));
      return list_join_newline(lines);
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
