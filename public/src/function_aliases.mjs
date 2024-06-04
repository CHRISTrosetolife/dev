import { assert } from "./assert.mjs";
import { each } from "./each.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { object_property_set } from "./object_property_set.mjs";
export function function_aliases() {
  let result = {};
  function alias_add(fn, aliases) {
    let name = fn;
    each(aliases, (a) => {
      assert(object_property_exists_not, [result, a]);
      object_property_set(result, a, fn.name);
    });
  }
}
