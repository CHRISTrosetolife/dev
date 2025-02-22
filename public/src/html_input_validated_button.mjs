import { map_exists } from "./map_exists.mjs";
import { each } from "./each.mjs";
import { html_on_keydown_enter } from "./html_on_keydown_enter.mjs";
import { html_button_enable_if } from "./html_button_enable_if.mjs";
import { html_input_validated_on_input_lambda_initial } from "./html_input_validated_on_input_lambda_initial.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_button } from "./html_button.mjs";
import { html_input_validated } from "./html_input_validated.mjs";
import { map_new } from "./map_new.mjs";
import { map_set } from "./map_set.mjs";
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
  each(inputs, function (input) {
    html_on_keydown_enter(input, on_click);
  });
  let button = html_button(root, button_text, on_click);
  let m = map_new();
  html_input_validated_on_input_lambda_initial(input, function (valid) {
    map_set(m, input, valid);
    let valid_all = true;
    each(inputs, function (input) {
      if (map_exists(input)) {
        if (map_get(m, input) === false) {
          valid_all = false;
        }
      } else {
        valid_all = false;
      }
      if (!valid_all) {
        let v2 = true;
        return v2;
      }
    });
    html_button_enable_if(button, valid_all);
  });
  function on_click() {
    let values = map_new();
    each(inputs, function (input) {
      map_set(values, html_value_get(input));
    });
    on_click_lambda(values);
  }
  let v = {
    input,
    button,
  };
  return v;
  function on_click_lambda(values) {
    let value = map_get(values, input);
    on_submit(value);
  }
}
