import { app_memorize_settings_button_back } from "./app_memorize_settings_button_back.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
export function app_memorize_settings_button_back_clear(context) {
  let { root } = context;
  html_clear_scroll_top(root);
  app_memorize_settings_button_back(root, context);
}
