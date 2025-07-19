import { app_path } from "./app_path.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_url(a_name) {
  let v = string_combine_multiple([
    "https://letjesusbeexalted.web.app/",
    app_path(a_name),
  ]);
  return v;
}
