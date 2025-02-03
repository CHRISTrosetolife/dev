import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { html_condition_letters_numbers_underscores } from "./html_condition_letters_numbers_underscores.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_condition_empty_not } from "./html_condition_empty_not.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_default_border_value } from "./html_style_default_border_value.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_style_display_block_or_none } from "./html_style_display_block_or_none.mjs";
import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { html_div } from "./html_div.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_on_input_initial } from "./html_on_input_initial.mjs";
import { html_input_width_full_placeholder } from "./html_input_width_full_placeholder.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { html_clear_scroll_top_centered_context } from "./html_clear_scroll_top_centered_context.mjs";
import { storage_local_exists_not } from "./storage_local_exists_not.mjs";
import { app_code_refresh } from "./app_code_refresh.mjs";
import { html_scripts_load } from "./html_scripts_load.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { html_style } from "./html_style.mjs";
import { object_merge } from "./object_merge.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
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
      let value = html_value_get(input_username);
      let conditions = [
        html_condition_empty_not(),
        html_condition_letters_numbers_underscores(),
      ];
      let mapped = list_map(conditions, (c) =>
        object_merge(
          {
            valid: object_property_get(c, "condition")(value),
          },
          c,
        ),
      );
      let errors = list_filter(mapped, (c) => !object_property_get(c, "valid"));
      let valid = list_empty_is(errors);
      html_style_display_block_or_none(p_error_message, !valid);
      let message = valid
        ? ""
        : string_combine_multiple([
            placeholder,
            " invalid: ",
            list_join_comma_space(
              list_map(errors, (c) =>
                string_combine_multiple([
                  "must ",
                  object_property_get(c, "message"),
                ]),
              ),
            ),
          ]);
      html_inner_set(p_error_message, message);
      let border_color = html_style_default_border_value(
        valid ? "green" : error_color,
      );
      html_style(input_username, border_color);
    });
  } else {
    app_code_refresh(context);
  }
}
