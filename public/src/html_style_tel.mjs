import { html_style_link } from "./html_style_link.mjs";
export function html_style_tel(phone_number_text) {
  return html_style_link("tel:" + phone_number_text);
}
