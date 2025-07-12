import { app_contact_download_file_paths } from "./app_contact_download_file_paths.mjs";
import { app_contact_download_file } from "./app_contact_download_file.mjs";
import { app_contact_dictionary } from "./app_contact_dictionary.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function app_contact_download() {
  let file_paths = await app_contact_download_file_paths();
  let d = await app_contact_dictionary();
  let mapped = await list_map_async(file_paths, async function (file_path) {
    let v = await app_contact_download_file(d, file_path);
    return v;
  });
  let filtered = list_filter(mapped, function (m) {
    let v2 = object_property_get(m, "output_null");
    return v2;
  });
  let v3 = filtered;
  return v3;
}
