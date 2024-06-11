import { html_cycle_monospace_short } from "./html_cycle_monospace_short.mjs";
import { js_code_decrement } from "./js_code_decrement.mjs";
import { js_code_statement_assign } from "./js_code_statement_assign.mjs";
import { js_code_statement_let } from "./js_code_statement_let.mjs";
import { lesson_while_generic_1 } from "./lesson_while_generic_1.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
export function lesson_for_greater_than_equal() {
  let description = "`for` loop with `>=`";
  let example_message = "with a `for` loop with a `>=`";
  return lesson_simple(
    function () {
      let { name, value, loop_end } = lesson_while_generic_1();
      let lines = [
        js_code_statement_let(name),
        `for (${js_code_statement_assign(name, loop_end)} ${name} >= ${value}; ${js_code_decrement(name)}) {`,
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
    html_cycle_monospace_short(
      parent,
      "a `for` loop can decrement and use `>=` instead of incrementing and using `<=`",
    );
  }
}
