import { list_length } from "./list_length.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export function list_multiple_is(split_d) {
  return greater_than_equal(list_length(split_d), 2);
}
