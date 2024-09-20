import { string_size } from "./string_size.mjs";
import { html_hash_get } from "./html_hash_get.mjs";
import { greater_than } from "./greater_than.mjs";
export function html_hash_exists() {
  return greater_than(string_size(html_hash_get()), 0);
}
