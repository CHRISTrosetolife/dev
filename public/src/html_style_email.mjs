import { html_mailto } from "./html_mailto.mjs";
import { html_style_link_prefix } from "./html_style_link_prefix.mjs";
export function html_style_email(email_address) {
  let v = html_style_link_prefix(html_mailto(), email_address);
  return v;
}
