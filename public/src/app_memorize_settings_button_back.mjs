import { app_memorize_refresh_settings } from "./app_memorize_refresh_settings.mjs";
import { html_button_width_full_text_click_back } from "./html_button_width_full_text_click_back.mjs";
export function app_memorize_settings_button_back(root, context) {
  html_button_width_full_text_click_back(root, () => {
    app_memorize_refresh_settings(context);
  });
}
