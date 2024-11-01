import { html_button_copy_get } from "./html_button_copy_get.mjs";
export function html_button_copy(result, text) {
  html_button_copy_get(result, () => text);
}
