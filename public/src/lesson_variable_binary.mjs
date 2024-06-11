import { html_cycle_code_list } from "./html_cycle_code_list.mjs";
import { lesson_divide_numbers } from "./lesson_divide_numbers.mjs";
import { list_join } from "./list_join.mjs";
import { call_multiple } from "./call_multiple.mjs";
import { integer_random_digit_single_positive } from "./integer_random_digit_single_positive.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { app_learn_code_random_identifier } from "./app_learn_code_random_identifier.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { random_50_50 } from "./random_50_50.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_includes } from "./list_includes.mjs";
export function lesson_variable_binary() {
  let description = "variable assigned from the output of a process";
  let example_message = string_combine("with a ", description);
  return lesson_simple(
    function () {
      let operators;
      if (random_50_50()) {
        operators = ["+", "-", "*", "/"];
      } else {
        operators = ["<", "<=", ">", ">=", "===", "!=="];
      }
      let operator = list_random_item(operators);
      let values = call_multiple(integer_random_digit_single_positive, 2);
      let [a, b] = values;
      let operators_equality = ["===", "!=="];
      if (list_includes(operators_equality, operator) && random_50_50()) {
        b = a;
      }
      if (operator === "/") {
        let { dividend, divisor } = lesson_divide_numbers();
        a = dividend;
        b = divisor;
      }
      let name = app_learn_code_random_identifier();
      let statements = [
        js_code_statement_let_assign(name, `${a} ${operator} ${b}`),
        app_learn_code_log(name),
      ];
      return list_join(statements, "\n");
    },
    example_before,
    description,
    example_message,
    [],
  );
  function example_before(parent) {
    html_cycle_code_list(parent, [
      "a variable can be assigned the output of : ",
      "<",
      " ",
      "<=",
      " ",
      ">",
      " ",
      ">=",
      " ",
      "===",
      " ",
      "!==",
      " ",
      "+",
      " ",
      "-",
      " ",
      "*",
      " or ",
      "/",
    ]);
  }
}
