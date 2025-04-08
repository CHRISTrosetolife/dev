import { range_1 } from "./range_1.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { app_learn_code_random_identifier } from "./app_learn_code_random_identifier.mjs";
export function lesson_array_sorted(count) {
  function lesson_array_sorted_inner(parent) {
    let a = app_learn_code_random_identifier();
    html_p_text_multiple(parent, [
      "in this lesson numbers will appear from smallest to largest",
      "for example , this is allowed :",
    ]);
    app_learn_code_code_part_contrast(
      parent,
      js_code_statement_let_assign(a, js_code_array(range_1(count))),
    );
    html_p_text_multiple(parent, ["however , this is not allowed :"]);
    app_learn_code_code_part_contrast(
      parent,
      js_code_statement_let_assign(a, js_code_array([2, 1])),
    );
  }
}
