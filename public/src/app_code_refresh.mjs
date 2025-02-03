import { object_property_get } from "./object_property_get.mjs";
import { app_code_refresh_functions } from "./app_code_refresh_functions.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
export function app_code_refresh(context) {
  html_clear_scroll_top_centered();
  let root = object_property_get(context, "root");
  html_button_width_full_text_click(root, "Functions", async () => {
    await app_code_refresh_functions(context);
  });
}
