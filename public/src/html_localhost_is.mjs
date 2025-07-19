import { string_localhost } from "./string_localhost.mjs";
import { html_hostname } from "./html_hostname.mjs";
export function html_localhost_is() {
  let v = html_hostname() === string_localhost();
  return v;
}
