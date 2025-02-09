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
  let button_submit = html_button(root, button_text, () => {
    let value = html_value_get(input);
    on_submit(value);
  });
  html_input_validated_on_input_lambda_initial(input, (valid) => {
    html_button_enable_if(button_submit, valid);
  });
}
