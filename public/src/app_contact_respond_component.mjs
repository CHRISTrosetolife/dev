import { app_contact_dictionary } from "./app_contact_dictionary.mjs";
import { log } from "./log.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_contact_respond } from "./app_contact_respond.mjs";
import { html_value_get } from "./html_value_get.mjs";
export async function app_contact_respond_component(t, response_p) {
  html_clear(response_p);
  let value = html_value_get(t);
  let d = await app_contact_dictionary();
  let response = app_contact_respond(d, value);
  log({
    response,
  });
  let v = {
    response,
    value,
  };
  return v;
}
