import { app_name_string } from "./app_name_string.mjs";
import { app_extension_html_combine } from "./app_extension_html_combine.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_url(a_name) {
  let v = string_combine_multiple([
    "https://letjesusbeexalted.web.app/",
    app_extension_html_combine(app_name_string(a_name)),
  ]);
  return v;
}
