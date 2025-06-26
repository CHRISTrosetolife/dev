import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function object_property_string_empty_not_is(object, property_name) {
  let value = object_property_get(object, property_name);
  let result = string_empty_not_is(value);
  return result;
}
