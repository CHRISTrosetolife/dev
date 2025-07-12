import { app_contact_download_file } from "./app_contact_download_file.mjs";
import { string_includes } from "./string_includes.mjs";
import { app_contact_download_file_paths } from "./app_contact_download_file_paths.mjs";
import { app_contact_dictionary } from "./app_contact_dictionary.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_single } from "./list_single.mjs";
export async function app_contact_download_single(query) {
  let file_paths = await app_contact_download_file_paths();
  let d = await app_contact_dictionary();
  let fps = await list_filter(file_paths, function (fp) {
    let match = string_includes(fp, query);
    return match;
  });
  let fp = list_single(fps);
  let v = await app_contact_download_file(d, fp);
}
