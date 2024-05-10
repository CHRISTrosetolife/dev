import { html_style_alternate_bold } from "./html_style_alternate_bold.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { string_delimit_if } from "./string_delimit_if.mjs";
import { string_to } from "./string_to.mjs";
import { js_code_statement_assign } from "./js_code_statement_assign.mjs";
import { html_style_alternate_monospace } from "./html_style_alternate_monospace.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { app_learn_code_random_value } from "./app_learn_code_random_value.mjs";
import { app_learn_code_random_identifier } from "./app_learn_code_random_identifier.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { html_hr } from "./html_hr.mjs";
import { js_code_statement_let } from "./js_code_statement_let.mjs";
export function lesson_variable_shorthand() {
  let example_message =
    "declaring and assigning a variable in a single statement";
  let description = example_message;
  return lesson_simple(
    function () {
      let name = app_learn_code_random_identifier();
      let value = app_learn_code_random_value();
      return `${js_code_statement_let_assign(name, value)}
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
      "remember the code to tell javascript about a variable named ",
      name,
      " :",
    ]);
    app_learn_code_code_part_contrast(parent, js_code_statement_let(name));
    html_style_alternate_bold(parent, [
      "this is called ",
      "declaring",
      " a variable",
    ]);
    html_hr(parent);
    html_style_alternate_monospace(parent, [
      "remember the code to give ",
      name,
      " a value of ",
      value,
      " :",
    ]);
    app_learn_code_code_part_contrast(
      parent,
      js_code_statement_assign(name, value),
    );
    html_style_alternate_bold(parent, [
      "this is called ",
      "assigning",
      " a variable a value",
    ]);
    html_hr(parent);
    html_p_text(
      parent,
      "in javascript it is possible to declare and assign a variable in a single statement , like this :",
    );
    app_learn_code_code_part_contrast(
      parent,
      js_code_statement_let_assign(name, value),
    );
  }
}
