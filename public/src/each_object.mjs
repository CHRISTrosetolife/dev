import { object_property_get } from "./object_property_get.mjs";
import { object_properties } from "./object_properties.mjs";
export function each_object(object, lambda) {
  let keys_get = object_properties;
  let item_get = object_property_get;
  let keys = keys_get(object);
  for (let key of keys) {
    let value = item_get(object, key);
    lambda(key, value);
  }
}
