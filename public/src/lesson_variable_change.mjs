import { app_learn_code_unique } from "./app_learn_code_unique.mjs";
import { string_delimit_if } from "./string_delimit_if.mjs";
import { string_to } from "./string_to.mjs";
import { js_code_statement_assign } from "./js_code_statement_assign.mjs";
import { html_style_alternate_monospace } from "./html_style_alternate_monospace.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { lesson_variable_code_get } from "./lesson_variable_code_get.mjs";
import { app_learn_code_random_value } from "./app_learn_code_random_value.mjs";
import { app_learn_code_random_identifier } from "./app_learn_code_random_identifier.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
export function lesson_variable_change() {
  let example_message =
    "changing a variable and logging to the console before and after the change";
  let description = example_message;
  return lesson_simple(
    function () {
      let name = app_learn_code_random_identifier();
      let value = app_learn_code_random_value();
      let value2 = app_learn_code_unique(app_learn_code_random_value, [value]);
      return `${lesson_variable_code_get(name, value)}
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
    let name = app_learn_code_random_identifier();
    let value = app_learn_code_random_value();
    let value_string = string_delimit_if(value);
    value_string = string_to(value);
    html_style_alternate_monospace(parent, [
      "here is code that will set the value of a variable named ",
      name,
      " to a value of ",
      value,
      " :",
    ]);
    app_learn_code_code_part_contrast(
      parent,
      js_code_statement_assign(name, value),
    );
    html_style_alternate_monospace(parent, [
      "if ",
      name,
      " already has a value , and ",
      name,
      " does not already have a value of ",
      value,
      " , then the value of ",
      name,
      " will be changed to ",
      value,
    ]);
    html_style_alternate_monospace(parent, [
      "",
      "=",
      " can be used to change the value of a variable",
    ]);
  }
}
