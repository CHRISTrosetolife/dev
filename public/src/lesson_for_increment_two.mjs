import { js_code_add_assign } from "./js_code_add_assign.mjs";
import { lesson_while_generic } from "./lesson_while_generic.mjs";
import { integer_random } from "./integer_random.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { js_code_statement_assign } from "./js_code_statement_assign.mjs";
import { js_code_statement_let } from "./js_code_statement_let.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
export function lesson_for_increment_two() {
  let description = "`for` loop with `+=` `2` or `3`";
  let example_message = "with `for` loop with `+=`";
  return lesson_simple(
    function () {
      const increment = integer_random(2, 3);
      let { name, value, loop_end } = lesson_while_generic(increment, integer_random(2, 3));
      let lines = [
        js_code_statement_let(name),
        `for (${js_code_statement_assign(name, value)} ${name} <= ${loop_end}; ${js_code_add_assign(name, increment)}) {`,
        app_learn_code_log(`'inside ' + ${name}`),
        `}`,
        app_learn_code_log(`'after ' + ${name}`),
      ];
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
      "a `for` loop can use `a += b` instead of `a++`",
    );
  }
}
