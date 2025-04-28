import { html_mailto } from "./html_mailto.mjs";
import { html_link_prefix } from "./html_link_prefix.mjs";
import { html_button } from "./html_button.mjs";
import { me_email } from "./me_email.mjs";
export function html_button_me_email(parent) {
  html_button(parent, "📨 Contact developer by email", function () {});
  let href = html_link_prefix(html_mailto(), me_email());
}
