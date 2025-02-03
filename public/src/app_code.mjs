import { string_underscore_is } from "./string_underscore_is.mjs";
import { string_digit_is } from "./string_digit_is.mjs";
import { list_all } from "./list_all.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
import { string_letter_is } from "./string_letter_is.mjs";
import { html_input_width_full_placeholder } from "./html_input_width_full_placeholder.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { html_clear_scroll_top_centered_context } from "./html_clear_scroll_top_centered_context.mjs";
import { storage_local_exists_not } from "./storage_local_exists_not.mjs";
import { app_code_refresh } from "./app_code_refresh.mjs";
import { html_scripts_load } from "./html_scripts_load.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_code() {
  let root = html_style_default_initialize();
  await html_scripts_load(root, ["axios", "acorn", "astring"]);
  let context = {
    root,
  };
  if (storage_local_exists_not(app_code, "username")) {
    let root = html_clear_scroll_top_centered_context(context);
    html_p_text_multiple(root, [
      "In order to store data for later, you need a username",
      "If you do not want to store data for later, you may skip this",
      "At this time there are no passwords. You should choose a unique username or someone could overwrite your data.",
    ]);
    html_input_width_full_placeholder(parent, "Username");
    function username_valid(username) {
      let list = string_split_empty(username);
      list_all(
        list,
        (l) =>
          string_letter_is(l) || string_underscore_is(l) || string_digit_is(l),
      );
      return list_all(list, (l) => string_letter_is(l));
    }
  } else {
    app_code_refresh(context);
  }
}
