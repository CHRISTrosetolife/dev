import { divide } from "./divide.mjs";
import { equal_0 } from "./equal_0.mjs";
import { assert } from "./assert.mjs";
import { mod } from "./mod.mjs";
import { greater_than } from "./greater_than.mjs";
import { counter } from "./counter.mjs";
export function integer_log(n, level_size) {
  return counter((c) => {
    let d = n;
    while (greater_than(d, 1)) {
      let m = mod(d, level_size);
      assert(equal_0, [m]);
      d = divide(d, level_size);
      c();
    }
  });
}
