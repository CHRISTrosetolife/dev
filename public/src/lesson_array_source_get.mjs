import { js_code_dot } from "./js_code_dot.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { lesson_array_source_get_generic } from "./lesson_array_source_get_generic.mjs";
export function lesson_array_source_get(count) {
  let v = lesson_array_source_get_generic(count, second_get);
  return v;
  function second_get(list_identifier, count) {
    let second = app_learn_code_log(js_code_dot(list_identifier, "length"));
    return second;
  }
}
