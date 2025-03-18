import { app_learn_math_multiplication_choices_generic } from "./app_learn_math_multiplication_choices_generic.mjs";
import { tautology } from "./tautology.mjs";
export function app_learn_math_multiplication_choices(root) {
  let filter = tautology;
  function symbol_get() {
    let v2 = "×";
    return v2;
  }
  let operation_word = "Multiply";
  function operation(left, right) {
    let v3 = left * right;
    return v3;
  }
  app_learn_math_multiplication_choices_generic(
    root,
    operation_word,
    filter,
    symbol_get,
    operation,
  );
}
