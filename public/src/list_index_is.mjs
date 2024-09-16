import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export function list_index_is(list, index) {
  return greater_than_equal(index, 0) && less_than(index, list_size(list));
}
