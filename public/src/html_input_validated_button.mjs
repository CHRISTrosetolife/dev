import { html_inputs_validated } from "./html_inputs_validated.mjs";
import { html_input_validated } from "./html_input_validated.mjs";
import { map_get } from "./map_get.mjs";
export function html_input_validated_button(
  root,
  placeholder,
  conditions,
  button_text,
  on_submit,
) {
  let input = html_input_validated(root, placeholder, conditions);
  let inputs = [input];
  let button = html_inputs_validated(root, inputs, button_text, on_click);
  let v = {
    input,
    button,
  };
  return v;
  function on_click(values) {
    let value = map_get(values, input);
    on_submit(value);
  }
}
