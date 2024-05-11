import { js_code_statement_decrement } from "./js_code_statement_decrement.mjs";
import { lesson_while_generic_1 } from "./lesson_while_generic_1.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
export function lesson_while_if_decrement_two() {
  let description = "decrement inside two `if`'s";
  let example_message = "with a decrement inside of two `if`'s";
  return lesson_simple(
    function () {
      let { name, value, loop_end } = lesson_while_generic_1();
      let lines = [
        js_code_statement_let_assign(name, loop_end),
        `if (${name} >= ${value}) {`,
        app_learn_code_log(`'inside first ' + ${name}`),
        js_code_statement_decrement(name),
        `}`,
        `if (${name} >= ${value}) {`,
        app_learn_code_log(`'value second ' + ${name}`),
        js_code_statement_decrement(name),
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
  function example_before(parent) {}
}
