import { html_clear } from "./html_clear.mjs";
import { app_contact_respond } from "./app_contact_respond.mjs";
import { html_value_get } from "./html_value_get.mjs";
export function app_contact_respond_component(t, response_p, d) {
  html_clear(response_p);
  let value = html_value_get(t);
  let response = app_contact_respond(d, value);
  let v = {
    response,
    value,
  };
  return v;
}
