import { assert } from "./assert.mjs";
import { each } from "./each.mjs";
export function assert_multiple(params, fn) {
  each(params, (param) => {
    assert(fn, [param]);
  });
}
