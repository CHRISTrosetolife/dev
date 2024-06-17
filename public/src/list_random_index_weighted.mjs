import { random } from "./random.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { assert } from "./assert.mjs";
import { each_index } from "./each_index.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
export function list_random_index_weighted(grass) {
  let sum = 0;
  let sums;
  sums = list_adder((la) =>
    each(grass, (proportion) => {
      sum += proportion;
      la(sum);
    }),
  );
  let r = random() * sum;
  let found = null;
  each_index(sums, (s, index) => {
    if (found === null) {
      if (s >= r) {
        found = index;
      }
    }
  });
  assert(null_not_is, [found]);
  return found;
}
