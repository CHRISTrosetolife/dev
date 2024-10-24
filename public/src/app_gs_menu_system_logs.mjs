import { html_button_back } from "./html_button_back.mjs";
import { json_to } from "./json_to.mjs";
import { html_button_width_full_text } from "./html_button_width_full_text.mjs";
import { each } from "./each.mjs";
import { log_logs } from "./log_logs.mjs";
import { app_gs_menu_main } from "./app_gs_menu_main.mjs";
import { html_clear } from "./html_clear.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function app_gs_menu_system_logs(context, menu_overlay) {
  assert_arguments_length(arguments, 2);
  html_clear(menu_overlay);
  html_button_back(menu_overlay, () => app_gs_menu_main(context, menu_overlay));
  let logs = log_logs();
  each(logs, (message) => {
    html_button_width_full_text(menu_overlay, json_to(message));
  });
}
