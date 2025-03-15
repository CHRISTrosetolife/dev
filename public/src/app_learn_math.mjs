import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_learn_math() {
  let root = html_style_default_initialize();
  if (false) {
    html_button(root, "Factoring whole numbers", function () {});
  }
  html_button(root, "Factoring polynomials", function () {
    html_clear_scroll_top(root);
    let answer_1 = 1;
    let answer_2 = 1;
  });
}
