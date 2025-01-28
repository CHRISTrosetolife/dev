import { me_email } from "./me_email.mjs";
import { html_style_email } from "./html_style_email.mjs";
import { html_button_width_full_text } from "./html_button_width_full_text.mjs";
export function html_button_me_email(root) {
  let email_button = html_button_width_full_text(
    root,
    "📨 Contact developer by email",
  );
  html_style_email(me_email())(email_button);
}
