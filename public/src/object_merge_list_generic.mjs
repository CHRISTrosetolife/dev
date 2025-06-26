import { list_add } from "./list_add.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { assert } from "./assert.mjs";
import { each_object } from "./each_object.mjs";
export function object_merge_list_generic(from, to, strict) {
  each_object(from, function (key, value) {
    if (strict) {
      assert(object_property_exists_not, [to, key]);
    }
    let existing = object_property_initialize(to, key, []);
    list_add(existing, value);
  });
  return to;
}
