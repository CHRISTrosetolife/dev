import { object_property_exists } from "./object_property_exists.mjs";
import { each } from "./each.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { assert } from "./assert.mjs";
export function object_merge_properties(to, from, properties) {
  assert_arguments_length(arguments, 3);
  each(properties, (p) => {
    let value = object_property_get(from, p);
    if (false) {
      if (object_property_exists(from, p)) {
      }
      assert();
    }
    object_property_set(to, p, value);
  });
  return to;
}
