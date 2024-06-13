import { list_size } from "./list_size.mjs";
import { equal_2 } from "./equal_2.mjs";
export function list_size_2(list) {
  let length = list_size(list);
  return equal_2(length);
}
