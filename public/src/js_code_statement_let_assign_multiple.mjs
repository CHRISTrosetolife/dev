import { list_size } from "./list_size.mjs";
import { list_join } from "./list_join.mjs";
import { js_code_assign } from "./js_code_assign.mjs";
import { js_code_statement_let } from "./js_code_statement_let.mjs";
import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
import { range } from "./range.mjs";
import { list_add } from "./list_add.mjs";
import { list_get } from "./list_get.mjs";
import { array_new } from "./array_new.mjs";
export function js_code_statement_let_assign_multiple(names, values) {
  let length_n = list_size(names);
  let length_v = list_size(values);
  assert(equal, [length_n, length_v]);
  let list = array_new();
  for (let i of range(length_n)) {
    let n = list_get(names, i);
    let v = list_get(values, i);
    list_add(list, js_code_assign(n, v));
  }
  return js_code_statement_let(list_join(list, ", "));
}
