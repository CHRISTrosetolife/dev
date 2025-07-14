import { list_to_lookup_property } from "./list_to_lookup_property.mjs";
import { app_contact_download_responses } from "./app_contact_download_responses.mjs";
export function app_contact_download_responses_lookup() {
  let responses_existing = app_contact_download_responses();
  let lookup = list_to_lookup_property(responses_existing, "message");
  return lookup;
}
