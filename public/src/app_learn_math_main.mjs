import { each_range } from "./each_range.mjs";
import { list_add } from "./list_add.mjs";
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
    each_range(11, function (a) {
      let b = 0;
      list_add(factor_polynomials_choices, {
        left: a,
        right: b,
      });
      list_add(factor_polynomials_choices, {
        left: b,
        right: a,
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
