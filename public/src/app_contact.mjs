import { html_scroll_center } from "./html_scroll_center.mjs";
import { html_p } from "./html_p.mjs";
import { app_share_verse_refresh_greet } from "./app_share_verse_refresh_greet.mjs";
import { html_rows_set } from "./html_rows_set.mjs";
import { html_textarea_width_full_placeholder_storage_local } from "./html_textarea_width_full_placeholder_storage_local.mjs";
import { app_contact_instructions } from "./app_contact_instructions.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_button } from "./html_button.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
export function app_contact() {
  let root = html_style_default_initialize();
  app_contact_instructions(root);
  let t = html_textarea_width_full_placeholder_storage_local(
    app_contact,
    root,
    "message",
    "Enter the message that you want to send to me:",
    "",
  );
  html_rows_set(t, 8);
  let response;
  html_button(root, "Send message to me", function () {
    let value = html_value_get(t);
    if (value === "hi") {
      html_p_text_multiple(response, [
        "💻 Computer program answered for me:",
        app_share_verse_refresh_greet(),
      ]);
      html_value_set(t, "");
      html_scroll_center(response);
    } else {
    }
  });
  response = html_p(root);
}
