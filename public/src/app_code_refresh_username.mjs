import { object_property_get } from "./object_property_get.mjs";
import { html_condition_identifier_fn_part } from "./html_condition_identifier_fn_part.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { html_input_validated_button } from "./html_input_validated_button.mjs";
import { html_button } from "./html_button.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_refresh_menu } from "./app_code_refresh_menu.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
export function app_code_refresh_username(context) {
  let root = app_code_screen_set(context, fn_name("app_code_refresh_username"));
  html_p_text_multiple(root, [
    "In order to store data for later, you need a username",
    "If you do not want to store data for later, you may skip this",
    "At this time there are no passwords. You should choose a unique username or someone could overwrite your data.",
  ]);
  html_input_validated_button(
    root,
    "Username",
    html_condition_identifier_fn_part(),
    "Save",
    function on_submit(value) {
      let app_fn = object_property_get(context, "app_fn");
      storage_local_set(app_fn, "username", value);
      next();
    },
  );
  html_hr(root);
  html_button(root, "Skip", function () {
    next();
  });
  async function next() {
    await app_code_refresh_menu(context);
  }
}
