import { html_cycle_code_multiple } from "./html_cycle_code_multiple.mjs";
import { js_code_statement_decrement } from "./js_code_statement_decrement.mjs";
import { lesson_while_generic_1 } from "./lesson_while_generic_1.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { string_combine } from "./string_combine.mjs";
import { subtract_1 } from "./subtract_1.mjs";
export function lesson_while_greater_than() {
  let description = "reverse `while` loop with greater than ( `>` )";
  let example_message = string_combine("with a ", description);
  return lesson_simple(
    function () {
      let { name, value, loop_end } = lesson_while_generic_1();
      let lines = [
        js_code_statement_let_assign(name, loop_end),
        `while (${name} > ${subtract_1(value)}) {`,
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
    html_cycle_code_multiple(parent, [
      "a `while` loop can use a `>` instead of `>=`",
      "if a `while` loop says `while (a >= 1)` then if `a` is `1` then the `while` loop will run",
      "remember , `1 === 1` is `true`",
      "if a `while` loop says `while (a > 1)` then if `a` is `1` then the `while` loop will not run",
      "remember , `1 > 1` is `false`",
    ]);
  }
}
