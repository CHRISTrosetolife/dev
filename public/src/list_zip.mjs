import { list_adder } from "./list_adder.mjs";
import { equal_by } from "./equal_by.mjs";
import { each_pairs } from "./each_pairs.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
import { list_all } from "./list_all.mjs";
export function list_zip(lists, lambda) {
  let sizes = list_map(lists, list_size);
  let compares = list_adder((la) => {
    each_pairs(sizes, (a, b) => {
      let e = equal_by(a, b, list_size);
      la(e);
    });
  });
  let same_sizes = list_all(compares, (c) => c === true);
}
