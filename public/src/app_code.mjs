import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_style_display_block_or_none } from "./html_style_display_block_or_none.mjs";
import { app_learn_code_style_code_error } from "./app_learn_code_style_code_error.mjs";
import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { html_div } from "./html_div.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_on_input_initial } from "./html_on_input_initial.mjs";
import { string_all_or } from "./string_all_or.mjs";
import { string_underscore_is } from "./string_underscore_is.mjs";
import { string_digit_is } from "./string_digit_is.mjs";
import { string_letter_is } from "./string_letter_is.mjs";
import { html_input_width_full_placeholder } from "./html_input_width_full_placeholder.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { html_clear_scroll_top_centered_context } from "./html_clear_scroll_top_centered_context.mjs";
import { storage_local_exists_not } from "./storage_local_exists_not.mjs";
import { app_code_refresh } from "./app_code_refresh.mjs";
import { html_scripts_load } from "./html_scripts_load.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
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
    let input_username = html_input_width_full_placeholder(root, "Username");
    let p_error_message = html_div(root);
    html_style_rounded_padded(p_error_message);
    app_learn_code_style_code_error(p_error_message);
    html_style_font_color(p_error_message, "white");
    html_on_input_initial(input_username, () => {
      let username = html_value_get(input_username);
      let uv = username_valid(username);
      html_style_display_block_or_none(p_error_message, !uv);
      let message = uv ? "" : "Usernme invalid";
      html_inner_set(p_error_message, message);
    });
    function username_valid(username) {
      return (
        string_empty_not_is(username) &&
        string_all_or(username, [
          string_letter_is,
          string_underscore_is,
          string_digit_is,
        ])
      );
    }
  } else {
    app_code_refresh(context);
  }
}
