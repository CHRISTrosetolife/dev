import { equal_1 } from "./equal_1.mjs";
import { assert } from "./assert.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { each_object } from "./each_object.mjs";
import { counter } from "./counter.mjs";
export function js_parent_replace(v, node, replacement) {
  let { parent } = v;
  let count = counter((c) => {
    each_object(parent, (key, value) => {
      if (value === node) {
        object_property_set(parent, key, replacement);
        c();
      }
    });
  });
  assert(equal_1, [count]);
}
