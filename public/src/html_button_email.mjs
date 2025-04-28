import { window_location_href_set } from "./window_location_href_set.mjs";
import { html_mailto } from "./html_mailto.mjs";
import { html_link_prefix } from "./html_link_prefix.mjs";
import { html_button } from "./html_button.mjs";
export function html_button_email(parent, email, text) {
  html_button(parent, text, function () {
    let href = html_link_prefix(html_mailto(), email);
    window_location_href_set(href);
  });
}
