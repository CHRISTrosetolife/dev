import { lesson_array_source_get_generic } from "./lesson_array_source_get_generic.mjs";
import { app_learn_code_log_combined } from "./app_learn_code_log_combined.mjs";
import { js_code_array_get } from "./js_code_array_get.mjs";
import { range } from "./range.mjs";
import { list_map } from "./list_map.mjs";
export function lesson_array_source_get(count) {
  let v = lesson_array_source_get_generic(count, second_get);
  return v;
  function second_get(count, a) {
    let outputs = list_map(range(count), function (i) {
      let v2 = js_code_array_get(a, i);
      return v2;
    });
    let second = app_learn_code_log_combined(outputs);
    return second;
  }
}
