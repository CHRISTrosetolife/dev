import { html_p } from "./html_p.mjs";
import { html_scroll_center } from "./html_scroll_center.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { app_contact_firebase_folder_combine } from "./app_contact_firebase_folder_combine.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_contact_respond } from "./app_contact_respond.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_button } from "./html_button.mjs";
import { html_rows_set } from "./html_rows_set.mjs";
import { html_textarea_width_full_placeholder_storage_local } from "./html_textarea_width_full_placeholder_storage_local.mjs";
import { app_contact_instructions } from "./app_contact_instructions.mjs";
import { uuid } from "./uuid.mjs";
import { app_contact } from "./app_contact.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
import { firebase_initialize } from "./firebase_initialize.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_contact_main() {
  let root = html_style_default_initialize();
  firebase_initialize();
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
    let output = app_contact_respond(value);
    if (value === null) {
      html_p_text(
        response,
        "💻 Computer program was not able to answer this message",
      );
      let file_name = file_name_json(id);
      let path = app_contact_firebase_folder_combine(file_name);
      await firebase_upload_object(path, {
        message: value,
      });
      html_p_text_multiple(response, [
        "📬 Your message has been sent to me",
        "📝 Lord-willing, I will answer",
        "⏰️ Please refresh this page later to see if I have answered",
      ]);
    } else {
      if (false) {
        html_p_text(response, "💻 Computer program answered for me:");
      }
      let r = html_p_text(response, output);
      if (false) {
        html_style_bold(r);
      }
      html_value_set(t, "");
      html_scroll_center(response);
    }
  });
  response = html_p(root);
}
