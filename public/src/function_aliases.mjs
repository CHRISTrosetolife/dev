import { function_open } from "./function_open.mjs";
import { function_copy } from "./function_copy.mjs";
import { watch } from "./watch.mjs";
import { function_search } from "./function_search.mjs";
import { function_auto } from "./function_auto.mjs";
import { assert } from "./assert.mjs";
import { each } from "./each.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { object_property_set } from "./object_property_set.mjs";
export function function_aliases() {
  let result = {};
  function alias_add(fn, aliases) {
    let { name } = fn;
    each(aliases, (a) => {
      assert(object_property_exists_not, [result, a]);
      object_property_set(result, a, name);
    });
  }
  alias_add(function_auto, ["a"]);
  alias_add(function_copy, ["c"]);
  alias_add(function_open, ["o"]);
  alias_add(function_search, ["s"]);
  alias_add(watch, ["w"]);
  return result;
}
