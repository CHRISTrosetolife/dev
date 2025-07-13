import { app_contact_download_all } from "./app_contact_download_all.mjs";
import { list_filter } from "./list_filter.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function app_contact_download_unhandled() {
  let mapped = await app_contact_download_all();
  let filtered = list_filter(mapped, function (m) {
    let v2 = object_property_get(m, "output_null");
    return v2;
  });
  let v3 = filtered;
  return v3;
}
