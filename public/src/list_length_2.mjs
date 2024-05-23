import { list_length } from "./list_length.mjs";
import { equal_1 } from "./equal_1.mjs";
export function list_length_2(list) {
  let length = list_length(list);
  return equal_1(length);
}
