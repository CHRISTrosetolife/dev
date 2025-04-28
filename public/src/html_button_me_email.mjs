import { html_button_email } from "./html_button_email.mjs";
import { me_email } from "./me_email.mjs";
export function html_button_me_email(parent) {
  let text = "📨 Contact developer by email";
  html_button_email(parent, me_email(), text);
}
