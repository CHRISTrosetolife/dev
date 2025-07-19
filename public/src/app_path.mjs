import { app_name_string } from "./app_name_string.mjs";
import { app_extension_html_combine } from "./app_extension_html_combine.mjs";
export function app_path(a_name) {
  return app_extension_html_combine(app_name_string(a_name));
}
