import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { each_pairs } from "./each_pairs.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
export function list_zip(lists, lambda) {
  let sizes = list_map(lists, list_size);
  each_pairs(sizes, (a, b) => {
    assert(equal, [a, b]);
  });
}
