import { file_name_json } from "./file_name_json.mjs";
import { uuid } from "./uuid.mjs";
import { path_join } from "./path_join.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { html_p_text } from "./html_p_text.mjs";
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
import { html_style_bold } from "./html_style_bold.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
export async function app_contact() {
  let root = html_style_default_initialize();
  let id = storage_local_initialize(app_contact, "id", await uuid());
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
  html_button(root, "Send message to me", async function () {
    let value = html_value_get(t);
    if (value === "hi") {
      if (false) {
        html_p_text(response, "💻 Computer program answered for me:");
      }
      let r = html_p_text(response, app_share_verse_refresh_greet());
      if (false) {
        html_style_bold(r);
      }
      html_value_set(t, "");
      html_scroll_center(response);
    } else {
      html_p_text(
        response,
        "💻 Computer program was not able to answer this message",
      );
      path_join(["contact", file_name_json(id)]);
      await firebase_upload_object();
    }
  });
  response = html_p(root);
}
