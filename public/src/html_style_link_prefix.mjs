import { html_style_link_blank } from "./html_style_link_blank.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function html_style_link_prefix(prefix, link) {
  let v = html_style_link_blank(string_combine_multiple([prefix, ":", link]));
  return v;
}
