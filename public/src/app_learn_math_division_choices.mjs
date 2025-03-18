import { html_button } from "./html_button.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_learn_math_multiplication_choices_generic } from "./app_learn_math_multiplication_choices_generic.mjs";
export function app_learn_math_division_choices(root) {
  function symbol_get() {
    let v2 = list_random_item(["÷", "/"]);
    return v2;
  }
  let operation_word = "Divide";
  function operation(left, right) {
    let v3 = left / right;
    return v3;
  }
  function lrs_get(a, b) {
    if (b === 0) {
      let v = [];
      return v;
    }
    let v2 = [
      {
        left: a * b,
        right: b,
      },
    ];
    return v2;
  }
  html_button(root, operation_word, function inner() {
    app_learn_math_multiplication_choices_generic(
      root,
      operation_word,
      lrs_get,
      symbol_get,
      operation,
      inner,
      skip,
    );
  });
}
