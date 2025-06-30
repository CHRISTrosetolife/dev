import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function data_functions_async_set(functions, name, value) {
  let f = object_property_get(functions, name);
  object_property_set(f, "async", value);
}
