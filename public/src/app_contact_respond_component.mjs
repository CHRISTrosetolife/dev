import { app_contact_respond } from "./app_contact_respond.mjs";
import { html_value_get } from "./html_value_get.mjs";
export function app_contact_respond_component(t) {
  let value = html_value_get(t);
  let output = app_contact_respond(value);
  let v = {
    output,
    value,
  };
  return v;
}
