import { app_extension_html } from "./app_extension_html.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { folder_current } from "./folder_current.mjs";
import { folder_name_public } from "./folder_name_public.mjs";
import { path_join } from "./path_join.mjs";
export function app_html_path(name) {
  let v = path_join([
    folder_current(),
    folder_name_public(),
    string_combine_multiple([name, app_extension_html()]),
  ]);
  return v;
}
