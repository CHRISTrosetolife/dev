import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { js_code_statement_add_assign } from "./js_code_statement_add_assign.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { app_learn_code_random_identifier } from "./app_learn_code_random_identifier.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { integer_random } from "./integer_random.mjs";
import { subtract } from "./subtract.mjs";
import { string_combine } from "./string_combine.mjs";
import { multiply } from "./multiply.mjs";
export function lesson_while_add_two() {
  let description = "`while` loop with `+=` `2` or `3`";
  let example_message = string_combine("with `while` loop with `+=`");
  return lesson_simple(
    function () {
      let name = app_learn_code_random_identifier();
      let iterations = integer_random(2, 3);
      let increment = integer_random(2, 3);
      let product = multiply(iterations, increment);
      let max_value = 10;
      let offset = integer_random(0, subtract(max_value, product));
      let value = 1 + offset;
      let loop_end = product + offset;
      let lines = [
        js_code_statement_let_assign(name, value),
        `while (${name} <= ${loop_end}) {`,
        app_learn_code_log(`'inside ' + ${name}`),
        js_code_statement_add_assign(name, increment),
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
      "a `while` loop can use `a += b;` instead of `a++;`",
    );
  }
}
