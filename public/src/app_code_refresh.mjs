import { app_code_refresh_functions } from "./app_code_refresh_functions.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
export function app_code_refresh(context) {
  html_clear_scroll_top_centered();
  html_button_width_full_text_click(context, "Functions", async () => {
    await app_code_refresh_functions(context);
  });
}
