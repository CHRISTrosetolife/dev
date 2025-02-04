import { html_input_validated_error_color } from "./html_input_validated_error_color.mjs";
import { html_input_validated } from "./html_input_validated.mjs";
import { app_code } from "./app_code.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { app_code_refresh_main } from "./app_code_refresh_main.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_button_enable_if } from "./html_button_enable_if.mjs";
import { html_style } from "./html_style.mjs";
import { html_style_default_border_value } from "./html_style_default_border_value.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_display_block_or_none } from "./html_style_display_block_or_none.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_merge } from "./object_merge.mjs";
import { list_map } from "./list_map.mjs";
import { html_condition_letters_numbers_underscores } from "./html_condition_letters_numbers_underscores.mjs";
import { html_condition_empty_not } from "./html_condition_empty_not.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_on_input_initial } from "./html_on_input_initial.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { html_clear_scroll_top_centered_context } from "./html_clear_scroll_top_centered_context.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_code_refresh_username(context) {
  let root = html_clear_scroll_top_centered_context(context);
  html_p_text_multiple(root, [
    "In order to store data for later, you need a username",
    "If you do not want to store data for later, you may skip this",
    "At this time there are no passwords. You should choose a unique username or someone could overwrite your data.",
  ]);
  let placeholder = "Username";
  let { p_error_message: error_message, input_username } = object_merge;
  let object_merge = html_input_validated(root, placeholder);
  let button_save = html_button_width_full_text_click(root, "Save", () => {
    let value = html_value_get(input_username);
    storage_local_set(app_code, "username", value);
    next();
  });
  html_on_input_initial(input_username, () => {
    let conditions = [
      html_condition_empty_not(),
      html_condition_letters_numbers_underscores(),
    ];
    let value = html_value_get(input_username);
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
    html_style_display_block_or_none(error_message, !valid);
    let message = valid
      ? ""
      : string_combine_multiple([
          placeholder,
          " invalid: ",
          list_join_comma_space(
            list_map(errors, (c) =>
              string_combine_multiple([
                "must ",
                object_property_get(c, "message")(value),
              ]),
            ),
          ),
        ]);
    html_inner_set(error_message, message);
    let border_color = html_style_default_border_value(
      valid ? "green" : html_input_validated_error_color(),
    );
    html_style(input_username, border_color);
    html_button_enable_if(button_save, valid);
  });
  html_hr(root);
  html_button_width_full_text_click(root, "Skip", () => {
    next();
  });
  async function next() {
    await app_code_refresh_main(context);
  }
}
