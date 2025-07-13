import { object_properties_new } from "./object_properties_new.mjs";
import { list_map } from "./list_map.mjs";
import { app_contact_download_all } from "./app_contact_download_all.mjs";
export async function app_contact_download_responses_get() {
  let r = await app_contact_download_all();
  let v = list_map(r, async function (ri) {
    let v2 = object_properties_new(ri, ["outputs", "valid", "message"]);
    return v2;
  });
  return v;
}
