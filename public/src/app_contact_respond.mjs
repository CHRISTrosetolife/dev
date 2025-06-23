import { html_scroll_center } from "./html_scroll_center.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_share_verse_refresh_greet } from "./app_share_verse_refresh_greet.mjs";
export function app_contact_respond(value) {
  if (value === "hi") {
    if (false) {
      html_p_text(response, "💻 Computer program answered for me:");
    }
    let output = app_contact_respond(value);
    let r = html_p_text(response, output);
    if (false) {
      html_style_bold(r);
    }
    html_value_set(t, "");
    html_scroll_center(response);
  }
  let v = app_share_verse_refresh_greet();
  return v;
}
