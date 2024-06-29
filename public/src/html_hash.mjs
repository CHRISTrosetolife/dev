import { each_object } from "./each_object.mjs";
import { list_size } from "./list_size.mjs";
import { html_hash_exists } from "./html_hash_exists.mjs";
import { html_hash_get } from "./html_hash_get.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { string_split } from "./string_split.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { object_properties } from "./object_properties.mjs";
import { object_property_set } from "./object_property_set.mjs";
export function html_hash(actions) {
  let lookup = {};
  let hash = html_hash_get();
  if (html_hash_exists()) {
    let hash_no_tag = string_prefix_without(hash, "#");
    let split = string_split(hash_no_tag, ",");
    for (let s of split) {
      let split2 = string_split(s, "=");
      let s2_length = list_size(split2);
      assert(equal, [s2_length, 2]);
      let key = list_get(split2, 0);
      let value = list_get(split2, 1);
      object_property_set(lookup, key, value);
    }
  }
  let action_properties = object_properties(actions);
  each_object(lookup, (key, value) => {
    if (list_includes(action_properties, key)) {
      let action = object_property_get(actions, key);
      action(value);
    }
  });
}
