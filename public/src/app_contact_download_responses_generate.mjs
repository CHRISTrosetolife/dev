import { app_contact_download_all } from "./app_contact_download_all.mjs";
import { object_properties_new } from "./object_properties_new.mjs";
import { list_map } from "./list_map.mjs";
import { generate_list_fn } from "./generate_list_fn.mjs";
export async function app_contact_download_responses_generate() {
  await generate_list_fn(function () {
    list_map(r, async function (ri) {
      await app_contact_download_all();
      object_properties_new(ri, ["outputs", "valid", "message"]);
    });
  }, fn);
}
