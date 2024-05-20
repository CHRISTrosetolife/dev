import { list_join } from "./list_join.mjs";
import { js_code_braces_inside } from "./js_code_braces_inside.mjs";
import { js_code_key_value } from "./js_code_key_value.mjs";
import { list_add } from "./list_add.mjs";
import { list_get } from "./list_get.mjs";
import { range } from "./range.mjs";
import { list_length } from "./list_length.mjs";
import { equal_by } from "./equal_by.mjs";
import { assert } from "./assert.mjs";
export function js_code_object_properties(names, values) {
  let result = [];
  assert(equal_by, [names, values], list_length);
  for (let i of range(list_length(names))) {
    let name = list_get(names, i);
    let value = list_get(values, i);
    list_add(result, js_code_key_value(name, value));
  }
  return js_code_braces_inside(list_join(result, ", "));
  return;
}
