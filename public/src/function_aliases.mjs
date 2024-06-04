import { each } from "./each.mjs";
import { object_property_set } from "./object_property_set.mjs";
export function function_aliases() {
  let result = {};
  function alias_add(fn, aliases) {
    each(aliases, (a) => object_property_set(result, a, fn.name));
  }
}
