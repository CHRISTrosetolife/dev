import { list_sort_map } from "./list_sort_map.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_sort_string_map } from "./list_sort_string_map.mjs";
import { html_cycle_code_list } from "./html_cycle_code_list.mjs";
import { call_multiple } from "./call_multiple.mjs";
import { app_learn_code_log_add } from "./app_learn_code_log_add.mjs";
import { integer_random_digit_single_positive } from "./integer_random_digit_single_positive.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { identity } from "./identity.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
import { js_code_statement_let } from "./js_code_statement_let.mjs";
import { app_learn_code_random_identifiers } from "./app_learn_code_random_identifiers.mjs";
export function lesson_variables_two() {
  let a = "a";
  let b = "b";
  let description = "two variables";
  let example_message = string_combine("with ", description);
  return lesson_simple(
    function () {
      let count = 2;
      let values = call_multiple(integer_random_digit_single_positive, count);
      list_sort_map(values, identity);
      let [v_a, v_b] = values;
      let names = app_learn_code_random_identifiers(count);
      list_sort_string_map(names, identity);
      let [name_a, name_b] = names;
      return string_combine_multiple([
        js_code_statement_let_assign(name_a, v_a),
        "\n",
        js_code_statement_let_assign(name_b, v_b),
        "\n",
        app_learn_code_log_add(name_a, name_b),
      ]);
    },
    example_before,
    description,
    example_message,
    [screen1, screen2],
  );
  function screen1(parent) {
    html_p_text(parent, "a program can have more than one variable");
    html_p_text(
      parent,
      "in this lesson the declared variables will be ordered alphabetically",
    );
    html_p_text(parent, "for example in the alphabet , A comes before B");
    html_cycle_code_list(parent, [
      "therefore varable ",
      "a",
      " will come before variable ",
      "b",
      " , like this :",
    ]);
    app_learn_code_code_part_contrast(
      parent,
      string_combine_multiple([
        js_code_statement_let(a),
        "\n",
        js_code_statement_let(b),
      ]),
    );
    html_cycle_code_list(parent, ["", "b", " will not come before ", "a"]);
    html_p_text(parent, "it will not be like this :");
    app_learn_code_code_part_contrast(
      parent,
      string_combine_multiple([
        js_code_statement_let(b),
        "\n",
        js_code_statement_let(a),
      ]),
    );
    html_p_text(parent, "this should make quizzing easier");
    html_p_text(
      parent,
      "however javascript allows variables to be declared either way",
    );
  }
  function screen2(parent) {
    html_p_text(
      parent,
      "in this lesson the numbers will be assigned from smallest to largest",
    );
    html_p_text(parent, "for example 1 is smaller than 2");
    html_cycle_code_list(parent, [
      "therefore the assignment of ",
      "1",
      " will come before the assignment of ",
      "2",
      " , like this :",
    ]);
    app_learn_code_code_part_contrast(
      parent,
      string_combine_multiple([
        js_code_statement_let_assign(a, "1"),
        "\n",
        js_code_statement_let_assign(b, "2"),
      ]),
    );
    html_p_text(parent, "it will not be like this :");
    app_learn_code_code_part_contrast(
      parent,
      string_combine_multiple([
        js_code_statement_let_assign(a, "2"),
        "\n",
        js_code_statement_let_assign(b, "1"),
      ]),
    );
    html_p_text(parent, "this should make quizzing easier");
    html_p_text(
      parent,
      "however javascript allows numbers to be assigned either way",
    );
  }
  function example_before(parent) {}
}
