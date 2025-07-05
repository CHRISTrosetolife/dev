import { object_property_set } from "./object_property_set.mjs";
import { list_add } from "./list_add.mjs";
import { object_copy } from "./object_copy.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_contact_match_generic(lambda, message) {
  let v = function app_contact_match_inner(result) {
    let data = object_property_get(result, "data");
    let copy = object_copy(data);
    object_property_set(result, "data", copy);
    let outputs = object_property_get(copy, "outputs");
    lambda(outputs);
    list_add(outputs, message);
  };
  return v;
}
