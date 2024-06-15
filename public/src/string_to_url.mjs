import { string_replace } from "./string_replace.mjs";
export function string_to_url(url) {
  return string_replace(url, " ", "+");
}
