import { never } from "./never.mjs";
import { assert } from "./assert.mjs";
import { add } from "./add.mjs";
import { list_adder } from "./list_adder.mjs";
export function range_generic(count, offset) {
  assert(never, []);
  let v = list_adder(function (la) {
    for (let i = 0; i < count; i++) {
      la(add(i, offset));
    }
  });
  return v;
}
