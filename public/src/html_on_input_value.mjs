import { html_value_get } from "./html_value_get.mjs";
import { html_on_input } from "./html_on_input.mjs";
export function html_on_input_value(input, lambda2) {
  html_on_input(input, wrapper);
  function wrapper() {
    let value = html_value_get(input);
    lambda2(value);
  }
}
