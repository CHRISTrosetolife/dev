import { list_last } from "./list_last.mjs";
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
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { add_1 } from "./add_1.mjs";
import { list_take } from "./list_take.mjs";
export function lesson_if_else_string_concat_variable() {
  let description = "string combined a variable";
  let example_message = string_combine("with ", description);
  return lesson_simple(
    function () {
      let variable_count = 1;
      let strings = app_learn_code_random_identifiers(add_1(variable_count));
      list_sort_string(strings, identity);
      let mapped = list_map(strings, string_delimit);
      let mapped_taken = list_take(mapped, variable_count);
      let names = app_learn_code_random_identifiers(1);
      let parts = [list_last(mapped)];
      for (let name of names) {
        list_add(parts, name);
      }
      list_scramble(parts);
      let lines = [];
      list_add(
        lines,
        js_code_statement_let_assign_multiple(names, mapped_taken),
      );
      list_add(lines, app_learn_code_log_join_plus(parts));
      return list_join_newline(lines);
    },
    example_before,
    description,
    example_message,
    [screen1],
  );
  function example_before(parent) {
    html_style_alternate_monospace_short(
      parent,
      "strings can be concatenated  with a variable",
    );
  }
  function screen1(parent) {
    html_p_text(
      parent,
      "in this lesson , strings will appear in alphabetical order",
    );
    html_p_text(parent, "for example , this is allowed :");
    app_learn_code_code_part_contrast(
      parent,
      `let a = 'b';
console.log('c' + a);`,
    );
    html_style_alternate_monospace_short(
      parent,
      "because `'b'` comes before `'c'` in the alphabet",
    );
    html_p_text(parent, "however , this is not allowed :");
    app_learn_code_code_part_contrast(
      parent,
      `let a = 'c';
console.log('b' + a);`,
    );
  }
}
