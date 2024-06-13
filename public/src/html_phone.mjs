import { html_replace_nb } from "./html_replace_nb.mjs";
import { html_style_tel } from "./html_style_tel.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function html_phone(root, phone_number_text) {
  let phone = html_span_text(root, html_replace_nb(phone_number_text));
  html_style_tel(phone_number_text)(phone);
  return phone;
}
