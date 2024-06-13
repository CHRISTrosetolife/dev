import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
export function list_empty_is(list) {
  return equal(list_size(list), 0);
}
