import { each_two } from "./each_two.mjs";
import { js_code_braces_inside } from "./js_code_braces_inside.mjs";
import { js_code_key_value } from "./js_code_key_value.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
export function js_code_object_properties(names, values) {
  let result = [];
  each_two(names, values, lambda);
  let v = js_code_braces_inside(list_join_comma_space(result));
  return v;
  function lambda(name, value) {
    list_add(result, js_code_key_value(name, value));
  }
}
