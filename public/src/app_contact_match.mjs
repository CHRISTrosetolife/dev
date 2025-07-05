import { app_contact_match_generic } from "./app_contact_match_generic.mjs";
import { list_add } from "./list_add.mjs";
export function app_contact_match(message) {
  let v = app_contact_match_generic(lambda, message);
  return v;
  function lambda(outputs) {
    list_add(outputs, message);
  }
}
