import { html_style_email } from "./html_style_email.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function html_email(root, email_text) {
  let email = html_span_text(root, email_text);
  html_style_email(email_text)(email);
}
