import { list_get } from "./list_get.mjs";
import { range } from "./range.mjs";
import { list_length } from "./list_length.mjs";
import { equal_by } from "./equal_by.mjs";
import { assert } from "./assert.mjs";
export function each_two(names, values, lambda) {
  assert(equal_by, [names, values, list_length]);
  for (let i of range(list_length(names))) {
    let name = list_get(names, i);
    let value = list_get(values, i);
    lambda(name, value);
  }
}
