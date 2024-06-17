import { random_50_50 } from "./random_50_50.mjs";
import { list_includes } from "./list_includes.mjs";
import { integer_random_digit_single_positive } from "./integer_random_digit_single_positive.mjs";
import { call_multiple } from "./call_multiple.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_learn_code_random_boolean_binary() {
  let operators = ["<", "<=", ">", ">=", "===", "!=="];
  let operator = list_random_item(operators);
  let operators_equality = ["===", "!=="];
  let values = call_multiple(integer_random_digit_single_positive, 2);
  let [a, b] = values;
  if (list_includes(operators_equality, operator) && random_50_50()) {
    let b = a;
  }
  let boolean = `${a} ${operator} ${b}`;
  return boolean;
}
