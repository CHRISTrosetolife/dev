import { string_includes } from "./string_includes.mjs";
import { app_contact_download_file_paths } from "./app_contact_download_file_paths.mjs";
import { app_contact_dictionary } from "./app_contact_dictionary.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_single } from "./list_single.mjs";
export async function app_contact_download_single(query) {
  let file_paths = await app_contact_download_file_paths();
  let d = await app_contact_dictionary();
  let filtered = await list_filter(file_paths, function (f) {
    let v4 = string_includes(f, query);
    return v4;
  });
  let f = list_single(filtered);
}
