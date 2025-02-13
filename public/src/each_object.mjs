import { each_object_generic } from "./each_object_generic.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_properties } from "./object_properties.mjs";
export function each_object(object, lambda) {
  let keys_get = object_properties;
  let item_get = object_property_get;
  each_object_generic(keys_get, object, item_get, lambda);
}
