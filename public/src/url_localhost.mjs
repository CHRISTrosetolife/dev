import { url_unsecure } from "./url_unsecure.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function url_localhost(port) {
  return string_combine_multiple([url_unsecure(), "localhost:", port, "/"]);
}
