import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function html_link_prefix(prefix, link) {
  return string_combine_multiple([prefix, ":", link]);
}
