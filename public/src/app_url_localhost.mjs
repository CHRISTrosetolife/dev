import { url_localhost_client } from "./url_localhost_client.mjs";
import { app_extension_html_combine } from "./app_extension_html_combine.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_url_localhost(a_name) {
  let v = string_combine_multiple([
    url_localhost_client(),
    app_extension_html_combine(a_name),
  ]);
  return v;
}
