import { app_code_save_delete_refresh } from "./app_code_save_delete_refresh.mjs";
import { html_button_width_full_text_click_back } from "./html_button_width_full_text_click_back.mjs";
export function app_code_save_delete_refresh_button_back(
  root,
  property_name_delete,
) {
  html_button_width_full_text_click_back(root, async () => {
    await app_code_save_delete_refresh(root, property_name_delete);
  });
}
