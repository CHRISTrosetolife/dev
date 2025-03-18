import { app_learn_math_division_choices } from "./app_learn_math_division_choices.mjs";
import { app_learn_math_multiplication_choices } from "./app_learn_math_multiplication_choices.mjs";
import { app_learn_math_polynomials_factoring } from "./app_learn_math_polynomials_factoring.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { html_button } from "./html_button.mjs";
export function app_learn_math_main(root) {
  html_clear_scroll_top_centered(root);
  if (false) {
    html_button(root, "Factoring whole numbers", function () {});
  }
  app_learn_math_multiplication_choices(root);
  app_learn_math_division_choices(root);
  app_learn_math_polynomials_factoring(root);
}
