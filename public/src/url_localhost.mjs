import { string_localhost } from "./string_localhost.mjs";
import { url_unsecure } from "./url_unsecure.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function url_localhost(port) {
  let v = string_combine_multiple([
    url_unsecure(),
    string_localhost(),
    ":",
    port,
    "/",
  ]);
  return v;
}
