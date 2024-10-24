import { html_button_back } from "./html_button_back.mjs";
import { app_memorize_refresh_settings } from "./app_memorize_refresh_settings.mjs";
export function app_memorize_settings_button_back(context) {
  let { root } = context;
  html_button_back(root, () => {
    app_memorize_refresh_settings(context);
  });
}
