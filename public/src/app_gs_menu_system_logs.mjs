import { json_to } from "./json_to.mjs";
import { html_button_width_full_text } from "./html_button_width_full_text.mjs";
import { each } from "./each.mjs";
import { log_logs } from "./log_logs.mjs";
import { app_gs_menu_main } from "./app_gs_menu_main.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_clear } from "./html_clear.mjs";
export function app_gs_menu_system_logs(menu_overlay) {
  html_clear(menu_overlay);
  html_button_width_full_text_click(menu_overlay, "back", () =>
    app_gs_menu_main(menu_overlay),
  );
  let logs = log_logs();
  each(logs, (message) => {
    html_button_width_full_text(menu_overlay, json_to(message));
  });
}
