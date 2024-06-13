import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
import { range } from "./range.mjs";
export function list_equal(a, b) {
  let a_length = list_size(a);
  let b_length = list_size(b);
  if (!equal(a_length, b_length)) {
    return false;
  }
  for (let i of range(a_length)) {
    let a_i = list_get(a, i);
    let b_i = list_get(b, i);
    if (!equal(a_i, b_i)) {
      return false;
    }
  }
  return true;
}
