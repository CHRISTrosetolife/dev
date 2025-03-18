import { app_learn_math_multiplication_choices_generic } from "./app_learn_math_multiplication_choices_generic.mjs";
export function app_learn_math_division_choices(root) {
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
    if (b === 0) {
      let v = [];
      return v;
    }
    let v2 = [
      {
        left: b,
        right: a,
      },
      {
        left: b,
        right: a,
      },
    ];
    return v2;
  }
  app_learn_math_multiplication_choices_generic(
    root,
    operation_word,
    lrs_get,
    symbol_get,
    operation,
  );
}
