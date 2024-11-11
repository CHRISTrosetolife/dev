import { object_property_set } from "./object_property_set.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { assert } from "./assert.mjs";
import { each } from "./each.mjs";
export function function_aliases_add(all, name,aliases) {
  each(aliases, (a) => {
    assert(object_property_exists_not, [all, a]);
    object_property_set(all, a, name);
  });
}
