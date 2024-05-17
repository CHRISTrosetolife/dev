import { integer_random } from "./integer_random.mjs";
import { lesson_while_generic } from "./lesson_while_generic.mjs";
import { js_code_statement_increment } from "./js_code_statement_increment.mjs";
import { js_code_increment } from "./js_code_increment.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { string_combine } from "./string_combine.mjs";
export function lesson_object_properties_two() {
  let description = "array with two items";
  let example_message = string_combine("with an ", description);
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
