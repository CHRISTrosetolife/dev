import { list_join } from "./list_join.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { lesson_array_source_get_generic } from "./lesson_array_source_get_generic.mjs";
import { js_code_array_get } from "./js_code_array_get.mjs";
import { range } from "./range.mjs";
import { list_map } from "./list_map.mjs";
export function lesson_array_source_get(count) {
  let v = lesson_array_source_get_generic(count_get, second_get);
  return v;
  function second_get(list_identifier, count) {
    let outputs = list_map(range(count), function (i) {
      let v2 = js_code_array_get(list_identifier, i);
      return v2;
    });
    let second = app_learn_code_log(list_join(outputs, " + ' ' + "));
    return second;
  }
}
