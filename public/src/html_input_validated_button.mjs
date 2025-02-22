import { each } from "./each.mjs";
import { html_on_keydown_enter } from "./html_on_keydown_enter.mjs";
import { html_button_enable_if } from "./html_button_enable_if.mjs";
import { html_input_validated_on_input_lambda_initial } from "./html_input_validated_on_input_lambda_initial.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_button } from "./html_button.mjs";
import { html_input_validated } from "./html_input_validated.mjs";
export function html_input_validated_button(
  root,
  placeholder,
  conditions,
  button_text,
  on_submit,
) {
  let input = html_input_validated(root, placeholder, conditions);
  let inputs = [input];
  each(list, function (item) {});
  html_on_keydown_enter(input, on_click);
  let button = html_button(root, button_text, on_click);
  html_input_validated_on_input_lambda_initial(input, function (valid) {
    html_button_enable_if(button, valid);
  });
  function on_click() {
    let value = html_value_get(input);
    on_submit(value);
  }
  let v = {
    input,
    button,
  };
  return v;
}
