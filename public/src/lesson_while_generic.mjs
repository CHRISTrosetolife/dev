import { subtract_1 } from "./subtract_1.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { integer_random } from "./integer_random.mjs";
import { app_learn_code_random_identifier } from "./app_learn_code_random_identifier.mjs";
export function lesson_while_generic(increment, iterations) {
  let name = app_learn_code_random_identifier();
  let iterations_less_1 = iterations - 1;
  let product = multiply(iterations_less_1, increment);
  let max_value = 10;
  let offset = integer_random(0, subtract_1(subtract(max_value, product)));
  let value = 1 + offset;
  let loop_end = product + value;
  return {
    name,
    value,
    loop_end,
  };
}
