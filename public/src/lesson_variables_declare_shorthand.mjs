import { lesson_screen_variables_numbers_sorted } from "./lesson_screen_variables_numbers_sorted.mjs";
import { list_sort } from "./list_sort.mjs";
import { js_code_statement_let_assign_multiple } from "./js_code_statement_let_assign_multiple.mjs";
import { call_multiple } from "./call_multiple.mjs";
import { app_learn_code_log_add } from "./app_learn_code_log_add.mjs";
import { integer_random_digit_single_positive } from "./integer_random_digit_single_positive.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { identity } from "./identity.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { app_learn_code_random_identifiers } from "./app_learn_code_random_identifiers.mjs";
export function lesson_variables_declare_shorthand() {
  let description =
    "declaring and assigning multiple variables in a single statement";
  let example_message = description;
  let count = 2;
  return lesson_simple(
    function () {
      let values = call_multiple(integer_random_digit_single_positive, count);
      list_sort(values, identity);
      let names = app_learn_code_random_identifiers(count);
      list_sort_string(names, identity);
      let [name_a, name_b] = names;
      return `${js_code_statement_let_assign_multiple(names, values)}
${app_learn_code_log_add(name_a, name_b)}`;
    },
    example_before,
    description,
    example_message,
    [lesson_screen_variables_numbers_sorted, screen2],
  );
  function screen2(parent) {
    let values = call_multiple(integer_random_digit_single_positive, count);
    list_sort(values, identity);
    let [a, b] = values;
    let names = app_learn_code_random_identifiers(count);
    list_sort_string(names, identity);
    let [name_a, name_b] = names;
    html_p_text(parent, "here is some code :");
    app_learn_code_code_part_contrast(
      parent,
      `${js_code_statement_let_assign(name_a, a)}
${js_code_statement_let_assign(name_b, b)}`,
    );
    html_p_text(parent, "that code can be shortened to :");
    app_learn_code_code_part_contrast(
      parent,
      js_code_statement_let_assign_multiple(names, values),
    );
  }
  function example_before(parent) {}
}
