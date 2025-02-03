import { list_all_true } from "./list_all_true.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
import { html_condition_empty_not } from "./html_condition_empty_not.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_default_border_value } from "./html_style_default_border_value.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_style_display_block_or_none } from "./html_style_display_block_or_none.mjs";
import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { html_div } from "./html_div.mjs";
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
import { html_style } from "./html_style.mjs";
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
    let placeholder = "Username";
    let input_username = html_input_width_full_placeholder(root, placeholder);
    let p_error_message = html_div(root);
    html_style_rounded_padded(p_error_message);
    let error_color = "darkred";
    html_style_font_color(p_error_message, error_color);
    html_on_input_initial(input_username, () => {
      let username = html_value_get(input_username);
      let conditions = [
        html_condition_empty_not(),
        {
          message: "contain only letters, numbers or underscores",
          condition: (u) =>
            string_all_or(u, [
              string_letter_is,
              string_underscore_is,
              string_digit_is,
            ]),
        },
      ];
      let mapped = list_map(conditions, (c) =>
        object_property_get(c, "condition")(username),
      );
      let uv = list_all_true(mapped);
      html_style_display_block_or_none(p_error_message, !uv);
      let message = uv
        ? ""
        : string_combine_multiple([placeholder, " invalid: must "]);
      html_inner_set(p_error_message, message);
      let border_color = html_style_default_border_value(
        uv ? "white" : error_color,
      );
      html_style(input_username, border_color);
    });
  } else {
    app_code_refresh(context);
  }
}
