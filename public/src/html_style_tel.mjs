import { html_style_link_prefix } from "./html_style_link_prefix.mjs";
export function html_style_tel(phone_number_text) {
  let prefix = "tel";
  return html_style_link_prefix(prefix, phone_number_text);
}
