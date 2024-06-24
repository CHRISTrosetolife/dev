import { json_to } from "./json_to.mjs";
import { html_button_width_full_text } from "./html_button_width_full_text.mjs";
import { each } from "./each.mjs";
import { log_logs } from "./log_logs.mjs";
import { app_gs_menu_main } from "./app_gs_menu_main.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_button_width_full_text_click_back } from "./html_button_width_full_text_click_back.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function app_gs_menu_system_logs(menu_overlay, map_c, map) {
  assert_arguments_length(arguments, 3);
  html_clear(menu_overlay);
  html_button_width_full_text_click_back(menu_overlay, () =>
    app_gs_menu_main(menu_overlay, map_c, map),
  );
  let logs = log_logs();
  each(logs, (message) => {
    html_button_width_full_text(menu_overlay, json_to(message));
  });
}
