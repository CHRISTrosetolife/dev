import { folder_name_public } from "./folder_name_public.mjs";
import { path_join } from "./path_join.mjs";
export function app_html_path(name) {
  return path_join([folder_name_public(), `${name}.html`]);
}
