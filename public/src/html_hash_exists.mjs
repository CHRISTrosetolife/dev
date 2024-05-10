import { html_hash_get } from "./html_hash_get.mjs";
import { string_length } from "./string_length.mjs";
import { greater_than } from "./greater_than.mjs";
export function html_hash_exists() {
  return greater_than(string_length(html_hash_get()), 0);
}
