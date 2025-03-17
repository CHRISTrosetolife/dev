import { list_add } from "./list_add.mjs";
import { each_range_1 } from "./each_range_1.mjs";
import { app_learn_math_quiz } from "./app_learn_math_quiz.mjs";
import { app_learn_math_polynomials_factoring } from "./app_learn_math_polynomials_factoring.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { html_button } from "./html_button.mjs";
export function app_learn_math_main(root) {
  html_clear_scroll_top_centered(root);
  if (false) {
    html_button(root, "Factoring whole numbers", function () {});
  }
  html_button(root, "Multiplication", function () {
    each_range_1(factoring_max, function (answer_2) {
      list_add(factor_polynomials_choices, {
        answer_1,
        answer_2,
      });
    });
    app_learn_math_quiz(
      root,
      question,
      button_strings,
      expecteds,
      problem_next,
    );
  });
  app_learn_math_polynomials_factoring(root);
}
