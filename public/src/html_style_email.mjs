import { html_style_link_prefix } from "./html_style_link_prefix.mjs";
export function html_style_email(phone_number_text) {
  return html_style_link_prefix("tel", phone_number_text);
}
