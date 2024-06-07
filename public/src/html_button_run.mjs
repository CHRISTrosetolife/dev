import { html_button_run_message } from "./html_button_run_message.mjs";
import { html_button_width_full_text_click_alternate_code } from "./html_button_width_full_text_click_alternate_code.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { string_combine } from "./string_combine.mjs";
export function html_button_run(root, run_click, message) {
  if (string_empty_not_is(message)) {
    message = string_combine(" : ", message);
  }
  return html_button_width_full_text_click_alternate_code(
    root,
    html_button_run_message(message),
    run_click,
  );
}
