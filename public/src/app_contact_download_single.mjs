import { string_includes } from "./string_includes.mjs";
import { app_contact_download_file_paths } from "./app_contact_download_file_paths.mjs";
import { app_contact_download_file } from "./app_contact_download_file.mjs";
import { app_contact_dictionary } from "./app_contact_dictionary.mjs";
import { list_filter } from "./list_filter.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function app_contact_download_single(query) {
  let file_paths = await app_contact_download_file_paths();
  let d = await app_contact_dictionary();
  let mapped = await list_filter(file_paths, function (f) {
    let v4 = string_includes(f, query);
    return v4;
  });
  let v = await app_contact_download_file(d, file_path);
  let filtered = list_filter(mapped, function (m) {
    let v2 = object_property_get(m, "output_null");
    return v2;
  });
  let v3 = filtered;
  return v3;
}
