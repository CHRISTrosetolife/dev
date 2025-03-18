import { html_button } from "./html_button.mjs";
import { app_learn_math_multiplication_choices_generic } from "./app_learn_math_multiplication_choices_generic.mjs";
export function app_learn_math_multiplication_choices(root) {
  function symbol_get() {
    let v2 = "×";
    return v2;
  }
  let operation_word = "Multiply";
  function operation(left, right) {
    let v3 = left * right;
    return v3;
  }
  function lrs_get(a, b) {
    let v2 = [
      {
        left: a,
        right: b,
      },
      {
        left: b,
        right: a,
      },
    ];
    return v2;
  }
  html_button(root, "Multiplication", function inner() {
    app_learn_math_multiplication_choices_generic(
      root,
      operation_word,
      lrs_get,
      symbol_get,
      operation,
      inner,
    );
  });
}
