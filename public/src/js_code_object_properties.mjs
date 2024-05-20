import { each_two } from "./each_two.mjs";
import { list_join } from "./list_join.mjs";
import { js_code_braces_inside } from "./js_code_braces_inside.mjs";
import { js_code_key_value } from "./js_code_key_value.mjs";
import { list_add } from "./list_add.mjs";
export function js_code_object_properties(names, values) {
  let result = [];
  each_two(names, values, lambda);
  return js_code_braces_inside(list_join(result, ", "));
  function lambda(name, value) {
    list_add(result, js_code_key_value(name, value));
  }
}
