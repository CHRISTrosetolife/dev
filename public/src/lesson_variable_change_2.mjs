import { html_cycle_monospace_list } from "./html_cycle_monospace_list.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { app_learn_code_unique } from "./app_learn_code_unique.mjs";
import { js_code_statement_assign } from "./js_code_statement_assign.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { app_learn_code_random_value } from "./app_learn_code_random_value.mjs";
import { app_learn_code_random_identifier } from "./app_learn_code_random_identifier.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
export function lesson_variable_change_2() {
  let example_message =
    "changing a variable and logging to the console after the change";
  let description = example_message;
  return lesson_simple(
    function () {
      let name = app_learn_code_random_identifier();
      let value = app_learn_code_random_value();
      let value2 = app_learn_code_unique(app_learn_code_random_value, [value]);
      return `${js_code_statement_let_assign(name, value)}
${js_code_statement_assign(name, value2)}
${app_learn_code_log(name)}`;
    },
    example_before,
    description,
    example_message,
    [screen1],
  );
  function example_before(parent) {}
  function screen1(parent) {
    html_cycle_monospace_list(parent, [
      "every time a variable is assigned a different value , the value of the variable changes",
    ]);
    html_cycle_monospace_list(parent, [
      "",
      "console.log(variable_name);",
      " will output the most recent and last value of ",
      "variable_name",
    ]);
    html_cycle_monospace_list(parent, [
      "if ",
      "variable_name",
      " has had multiple assignments , ",
      "console.log(variable_name);",
      " will not output the previous values of ",
      "variable_name",
    ]);
  }
}
