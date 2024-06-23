import { object_property_get } from "./object_property_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { each } from "./each.mjs";
export function list_to_lookup_key_value_property(
  list,
  key_property_name,
  value_property_name,
) {
  let result = {};
  each(list, (item) =>
    object_property_set(
      result,
      object_property_get(item, key_property_name),
      object_property_get(item, value_property_name),
    ),
  );
  return result;
}
