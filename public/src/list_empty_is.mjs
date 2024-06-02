import { list_length } from "./list_length.mjs";
import { equal } from "./equal.mjs";
export function list_empty_is(list) {
  return equal(list_length(list), 0);
}
