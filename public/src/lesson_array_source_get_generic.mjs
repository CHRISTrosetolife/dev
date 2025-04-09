import { list_join_newline } from "./list_join_newline.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { integer_random_digit_single_positive_multiple_sorted } from "./integer_random_digit_single_positive_multiple_sorted.mjs";
import { app_learn_code_random_identifier } from "./app_learn_code_random_identifier.mjs";
export function lesson_array_source_get_generic(count, second_get) {
  let v = function () {
    let a = app_learn_code_random_identifier();
    let values = integer_random_digit_single_positive_multiple_sorted(count);
    let second = second_get(a, count);
    let list = [js_code_statement_let_assign(a, js_code_array(values)), second];
    let v3 = list_join_newline(list);
    return v3;
  };
  return v;
}
