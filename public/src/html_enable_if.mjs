import { html_disable } from "./html_disable.mjs";
import { html_enable } from "./html_enable.mjs";
export function html_enable_if(condition, button_reset) {
  if (condition) {
    html_enable(button_reset);
  } else {
    html_disable(button_reset);
  }
}
