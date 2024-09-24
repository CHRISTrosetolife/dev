import { html_style_button_default } from "./html_style_button_default.mjs";
import { html_style_success } from "./html_style_success.mjs";
import { app_list } from "./app_list.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
export function app_list_choice_update(index, button, last) {
  let chosen = storage_local_get(app_list, "chosen");
  if (chosen[index]) {
    last = button;
    html_style_success(button);
  } else {
    html_style_button_default(button);
  }
  return last;
}
