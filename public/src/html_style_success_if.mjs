import { equal_json } from "./equal_json.mjs";
import { html_style_success } from "./html_style_success.mjs";
export function html_style_success_if(button, expected, actual) {
  if (equal_json(actual, expected)) {
    html_style_success(button);
  }
}
