import { integer_random } from "./integer_random.mjs";
import { lesson_while_generic } from "./lesson_while_generic.mjs";
import { js_code_statement_increment } from "./js_code_statement_increment.mjs";
import { js_code_increment } from "./js_code_increment.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
export function lesson_for_iterations_log_outside_large() {
  let description =
    "`for` loop with a counter with no `console.log` inside - larger";
  let example_message =
    "with a `for` loop with a counter with no `console.log` inside of the `for` loop with a larger count";
  return lesson_simple(
    function () {
      let { name, value, loop_end } = lesson_while_generic(
        1,
        integer_random(4, 5),
      );
      let lines = [
        js_code_statement_let_assign("counter", "0"),
        `for (${js_code_statement_let_assign(name, value)} ${name} <= ${loop_end}; ${js_code_increment(name)}) {`,
        js_code_statement_increment("counter"),
        `}`,
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
