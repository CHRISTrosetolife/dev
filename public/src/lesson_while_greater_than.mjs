import { js_code_statement_decrement } from "./js_code_statement_decrement.mjs";
import { lesson_while_generic_1 } from "./lesson_while_generic_1.mjs";
import { html_style_alternate_monospace_short_multiple } from "./html_style_alternate_monospace_short_multiple.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { string_combine } from "./string_combine.mjs";
export function lesson_while_greater_than() {
  let description = "reverse `while` loop with greater than ( `>` )";
  let example_message = string_combine("with a ", description);
  return lesson_simple(
    function () {
      let { name, value, loop_end } = lesson_while_generic_1();
      let lines = [
        js_code_statement_let_assign(name, loop_end),
        `while (${name} > ${value}) {`,
        app_learn_code_log(`'inside ' + ${name}`),
        js_code_statement_decrement(name),
        `}`,
        app_learn_code_log(`'after ' + ${name}`),
      ];
      return list_join_newline(lines);
    },
    example_before,
    description,
    example_message,
    [screen1],
  );
  function example_before(parent) {}
  function screen1(parent) {
    html_style_alternate_monospace_short_multiple(parent, [
      "a `while` loop can use a `<` instead of `<=`",
      "if a `while` loop says `while (a <= 10)` then if `a` is `10` then the `while` loop will run",
      "remember , `10 === 10` is `true`",
      "if a `while` loop says `while (a < 10)` then if `a` is `10` then the `while` loop will not run",
      "remember , `10 < 10` is `false`",
    ]);
  }
}
