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
import { html_value_get } from "./html_value_get.mjs";
import { html_on_input } from "./html_on_input.mjs";
import { object_merge_strict } from "./object_merge_strict.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_input_validated_error_color } from "./html_input_validated_error_color.mjs";
import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { html_div } from "./html_div.mjs";
import { html_input_width_full_placeholder } from "./html_input_width_full_placeholder.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function html_input_validated(root, placeholder, conditions) {
  let input_username_inner = html_input_width_full_placeholder(
    root,
    placeholder,
  );
  let error_message = html_div(root);
  html_style_rounded_padded(error_message);
  let error_color = html_input_validated_error_color();
  html_style_font_color(error_message, error_color);
  let input = object_merge_strict(
    {
      on_input,
    },
    input_username_inner,
  );
  let title = object_property_get(input, "title");
  html_on_input(input_username_inner, on_input);
  return input;
  function on_input() {
    let value = html_value_get(input);
    let mapped = list_map(conditions, function (c) {
      let v = object_merge(
        {
          valid: object_property_get(c, "condition")(value),
        },
        c,
      );
      return v;
    });
    let errors = list_filter(mapped, function (c) {
      let v2 = !object_property_get(c, "valid");
      return v2;
    });
    let valid = list_empty_is(errors);
    html_style_display_block_or_none(error_message, !valid);
    let message = valid
      ? ""
      : string_combine_multiple([
          placeholder,
          " invalid: ",
          list_join_comma_space(
            list_map(errors, function (c) {
              let v3 = string_combine_multiple([
                "must ",
                object_property_get(c, "message")(value),
              ]);
              return v3;
            }),
          ),
        ]);
    html_inner_set(error_message, message);
    let border_color = valid ? "green" : html_input_validated_error_color();
    let input_border_style = html_style_default_border_value(border_color);
    html_style(input, input_border_style);
    html_style_font_color(title, border_color);
    if (object_property_exists(input, "on_input_lambda")) {
      let on_input = object_property_get(input, "on_input_lambda");
      on_input(valid, value);
    }
  }
}
