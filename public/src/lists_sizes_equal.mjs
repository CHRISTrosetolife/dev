import { true_is } from "./true_is.mjs";
import { list_all } from "./list_all.mjs";
import { list_size } from "./list_size.mjs";
import { equal_by } from "./equal_by.mjs";
import { each_pairs } from "./each_pairs.mjs";
import { list_adder } from "./list_adder.mjs";
export function lists_sizes_equal(lists) {
  let compares = list_adder((la) => {
    each_pairs(lists, (a, b) => {
      let e = equal_by(a, b, list_size);
      la(e);
    });
  });
  let same_sizes = list_all(compares, (c) => true_is(c));
  return same_sizes;
}
