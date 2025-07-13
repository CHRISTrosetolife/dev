import { app_contact_download_file } from "./app_contact_download_file.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { app_contact_dictionary } from "./app_contact_dictionary.mjs";
import { app_contact_download_file_paths } from "./app_contact_download_file_paths.mjs";
export async function app_contact_download_all() {
  let file_paths = await app_contact_download_file_paths();
  let d = await app_contact_dictionary();
  let mapped = await list_map_async(file_paths, async function (file_path) {
    let v = await app_contact_download_file(d, file_path);
    return v;
  });
  return mapped;
}
