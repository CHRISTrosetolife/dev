import { noop } from "./noop.mjs";
import { app_contact_match_generic } from "./app_contact_match_generic.mjs";
export function app_contact_match(message) {
  let v = app_contact_match_generic(noop, message);
  return v;
}
