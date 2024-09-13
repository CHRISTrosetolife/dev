import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
export function object_property_get_or(o, property_name, default_value) {
  let result;
  if (object_property_exists_not(o, property_name)) {
    result = default_value;
  } else {
    result = object_property_get(o, property_name);
  }
  return result;
}
