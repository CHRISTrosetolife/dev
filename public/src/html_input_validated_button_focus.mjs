import { html_focus } from "./html_focus.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_input_validated_button } from "./html_input_validated_button.mjs";
export function html_input_validated_button_focus(
  d,
  input_placeholder,
  conditions,
  button_text,
  on_submit,
) {
  let input;
  let after = html_input_validated_button(
    d,
    input_placeholder,
    conditions,
    button_text,
    on_submit,
  );
  input = object_property_get(after, "input");
  html_focus(input);
  return input;
}
