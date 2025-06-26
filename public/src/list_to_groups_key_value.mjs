import { list_add } from "./list_add.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { each } from "./each.mjs";
export function list_to_groups_key_value(messages, key_get, value_get) {
  let result = {};
  each(messages, function (message) {
    let key = key_get(message);
    let values = object_property_initialize(result, key, []);
    list_add(values, value_get(message));
  });
  return result;
}
