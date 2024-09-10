import { app_memorize_refresh_settings } from "./app_memorize_refresh_settings.mjs";
import { html_button_width_full_text_click_back } from "./html_button_width_full_text_click_back.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
export function app_memorize_settings_button_back(context) {
  let { root } = context;
  html_clear_scroll_top(root);
  html_button_width_full_text_click_back(root, () => {
    app_memorize_refresh_settings(context);
  });
}
