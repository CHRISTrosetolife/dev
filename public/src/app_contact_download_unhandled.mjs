import { app_contact_download_responses_lookup } from "./app_contact_download_responses_lookup.mjs";
import { app_contact_download_all } from "./app_contact_download_all.mjs";
import { list_filter } from "./list_filter.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function app_contact_download_unhandled() {
  let lookup = app_contact_download_responses_lookup();
  let mapped = await app_contact_download_all();
  let filtered = list_filter(mapped, function (m) {
    let on = object_property_get(m, "output_null");
    let message = object_property_get(m, "message");
    return on;
  });
  let v3 = filtered;
  return v3;
}
