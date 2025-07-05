import { object_copy } from "./object_copy.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_contact_match_generic(lambda, message) {
  let v = function app_contact_match_inner(result) {
    let data = object_property_get(result, "data");
    let copy = object_copy(data);
    let outputs = object_property_get(copy, "outputs");
    lambda(outputs);
        list_add(outputs, message);
  };
  return v;
}
