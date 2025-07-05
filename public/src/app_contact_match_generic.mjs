import { app_contact_match_data_replace } from "./app_contact_match_data_replace.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_contact_match_generic(lambda, message) {
  let v = function app_contact_match_inner(result) {
    let copy = app_contact_match_data_replace(result);
    let outputs = object_property_get(copy, "outputs");
    lambda(outputs, copy);
    list_add(outputs, message);
  };
  return v;
}
