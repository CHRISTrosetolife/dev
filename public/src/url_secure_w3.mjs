import { url_secure } from "./url_secure.mjs";
import { string_combine } from "./string_combine.mjs";
export function url_secure_w3() {
  return string_combine(url_secure(), "www.");
}
