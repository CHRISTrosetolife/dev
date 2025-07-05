import { object_property_initialize } from "./object_property_initialize.mjs";
import { app_contact_match_data_replace } from "./app_contact_match_data_replace.mjs";
import { list_add } from "./list_add.mjs";
export function app_contact_match_generic(lambda, message) {
  let v = function app_contact_match_inner(result) {
    let data = app_contact_match_data_replace(result);
    let outputs = object_property_initialize(data, "outputs", []);
    lambda(outputs, data);
    list_add(outputs, message);
  };
  return v;
}
