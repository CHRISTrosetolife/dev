import { app_code_refresh_functions } from "./app_code_refresh_functions.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_code_button_functions_search(context) {
  html_button_width_full_text_click(root, "Search Functions", async () => {
    await app_code_refresh_functions(context);
  });
}
