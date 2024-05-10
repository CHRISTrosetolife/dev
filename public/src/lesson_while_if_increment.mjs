import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { js_code_statement_increment } from "./js_code_statement_increment.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { app_learn_code_random_identifier } from "./app_learn_code_random_identifier.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { integer_random } from "./integer_random.mjs";
import { subtract } from "./subtract.mjs";
export function lesson_while_if_increment() {
  let description = "multiple increments";
  let example_message = string_combine("with an ", description);
  return lesson_simple(
    function () {
      let name = app_learn_code_random_identifier();
      let iterations = 2;
      let max_value = 10;
      let offset = integer_random(0, subtract(max_value, iterations));
      let value = 1 + offset;
      let loop_end = iterations + offset;
      let lines = [
        js_code_statement_let_assign(name, value),
        `if (${name} <= ${loop_end}) {`,
        app_learn_code_log(`'inside ' + ${name}`),
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
  function example_before(parent) {
    html_style_alternate_monospace_short(
      parent,
      "a variable may be incremented ( `++` ) multiple times",
    );
  }
}
