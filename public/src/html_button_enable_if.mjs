import { html_button_disable } from "./html_button_disable.mjs";
import { html_button_enable } from "./html_button_enable.mjs";
export function html_button_enable_if(button, condition) {
  if (condition) {
    html_button_enable(button);
  } else {
    html_button_disable(button);
  }
}
