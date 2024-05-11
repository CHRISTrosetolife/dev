import { lesson_while_generic_1 } from "./lesson_while_generic_1.mjs";
import { js_code_statement_increment } from "./js_code_statement_increment.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
export function lesson_while_if_increment_two() {
  let description = "increment inside two `if`'s";
  let example_message = "with an increment inside of two `if`'s";
  return lesson_simple(
    function () {
      let { name, value, loop_end } = lesson_while_generic_1();
      let lines = [
        js_code_statement_let_assign(name, value),
        `if (${name} <= ${loop_end}) {`,
        app_learn_code_log(`'inside first ' + ${name}`),
        js_code_statement_increment(name),
        `}`,
        `if (${name} <= ${loop_end}) {`,
        app_learn_code_log(`'inside second ' + ${name}`),
        js_code_statement_increment(name),
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
