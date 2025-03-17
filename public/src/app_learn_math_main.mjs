import { app_learn_math_polynomials_factoring } from "./app_learn_math_polynomials_factoring.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { html_button } from "./html_button.mjs";
export function app_learn_math_main(root) {
  html_clear_scroll_top_centered(root);
  if (false) {
    html_button(root, "Factoring whole numbers", function () {});
  }
  html_button(root, "Multiplication", function () {});
  app_learn_math_polynomials_factoring(root);
}
