import { html_cycle_monospace } from "./html_cycle_monospace.mjs";
import { js_code_statement_decrement } from "./js_code_statement_decrement.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { app_learn_code_random_identifier } from "./app_learn_code_random_identifier.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { integer_random_digit_single_positive } from "./integer_random_digit_single_positive.mjs";
import { list_add } from "./list_add.mjs";
import { range } from "./range.mjs";
import { integer_random } from "./integer_random.mjs";
import { add } from "./add.mjs";
export function lesson_while_decrement_multiple() {
  let description = "multiple decrements";
  let example_message = string_combine("with an ", description);
  return lesson_simple(
    function () {
      let name = app_learn_code_random_identifier();
      let times = integer_random(2, 3);
      let value = add(integer_random_digit_single_positive(), times);
      let lines = [js_code_statement_let_assign(name, value)];
      for (let i of range(times)) {
        list_add(lines, js_code_statement_decrement(name));
      }
      list_add(lines, app_learn_code_log(name));
      return list_join_newline(lines);
    },
    example_before,
    description,
    example_message,
    [],
  );
  function example_before(parent) {
    html_cycle_monospace(
      parent,
      "a variable may be decremented ( `--` ) multiple times",
    );
  }
}
