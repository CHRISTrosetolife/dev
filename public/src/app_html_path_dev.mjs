import { app_extension_html_combine } from "./app_extension_html_combine.mjs";
import { folder_name_public } from "./folder_name_public.mjs";
import { folder_current } from "./folder_current.mjs";
import { path_join } from "./path_join.mjs";
export function app_html_path_dev(name) {
  let v = path_join([
    folder_current(),
    folder_name_public(),
    "dev",
    app_extension_html_combine(name),
  ]);
  return v;
}
