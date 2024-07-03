import { true_is } from "./true_is.mjs";
import { assert } from "./assert.mjs";
import { lists_sizes_equal } from "./lists_sizes_equal.mjs";
export function list_zip(lists, lambda) {
  let same_sizes = lists_sizes_equal(lists);
  assert(true_is, [same_sizes]);
}
