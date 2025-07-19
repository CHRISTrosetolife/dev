import { html_hostname } from "./html_hostname.mjs";
export function html_localhost_is() {
  return html_hostname() === string_localhost();
}
function string_localhost() {
    return "localhost";
}

