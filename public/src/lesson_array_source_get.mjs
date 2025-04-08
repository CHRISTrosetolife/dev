import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_log_combined } from "./app_learn_code_log_combined.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { js_code_array_get } from "./js_code_array_get.mjs";
import { range } from "./range.mjs";
import { list_map } from "./list_map.mjs";
import { integer_random_digit_single_positive_multiple_sorted } from "./integer_random_digit_single_positive_multiple_sorted.mjs";
import { app_learn_code_random_identifier } from "./app_learn_code_random_identifier.mjs";
export function lesson_array_source_get(count) {
  let v = function () {
    let a = app_learn_code_random_identifier();
    let values = integer_random_digit_single_positive_multiple_sorted(count);
    let outputs = list_map(range(count), function (i) {
      let v2 = js_code_array_get(a, i);
      return v2;
    });
    let list = [
      js_code_statement_let_assign(a, js_code_array(values)),
      app_learn_code_log_combined(outputs),
    ];
    let v3 = list_join_newline(list);
    return v3;
  };
  return v;
}
