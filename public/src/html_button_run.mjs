import { html_button_width_full_text_click_alternate_short } from "./html_button_width_full_text_click_alternate_short.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { string_combine } from "./string_combine.mjs";
export function html_button_run(root, run_click, message) {
  if (string_empty_not_is(message)) {
    message = string_combine(" : ", message);
  }
  html_button_width_full_text_click_alternate_short(
    root,
    string_combine("💻 run", message),
    run_click,
  );
}
