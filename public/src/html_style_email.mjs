import { html_style_link_prefix } from "./html_style_link_prefix.mjs";
export function html_style_email(email_address) {
  return html_style_link_prefix("mailto", email_address);
}
