import { html_hash_lookup } from "./html_hash_lookup.mjs";
import { each_object } from "./each_object.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { object_properties } from "./object_properties.mjs";
export function html_hash(actions) {
  let lookup = html_hash_lookup();
  let action_properties = object_properties(actions);
  each_object(lookup, (key, value) => {
    if (list_includes(action_properties, key)) {
      let action = object_property_get(actions, key);
      action(value);
    }
  });
}
