import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_url(a_name) {
  let v = string_combine_multiple([
    "https://letjesusbeexalted.web.app/",
    a_name,
    ".html",
  ]);
  return v;
}
