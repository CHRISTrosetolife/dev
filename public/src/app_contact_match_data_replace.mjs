import { object_property_set } from "./object_property_set.mjs";
import { object_copy } from "./object_copy.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_contact_match_data_replace(result) {
  let data = object_property_get(result, "data");
  let copy = object_copy(data);
  object_property_set(result, "data", copy);
  return copy;
}
