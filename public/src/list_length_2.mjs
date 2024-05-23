import { equal_2 } from "./equal_2.mjs";
import { list_length } from "./list_length.mjs";
export function list_length_2(list) {
  let length = list_length(list);
  return equal_2(length);
}
