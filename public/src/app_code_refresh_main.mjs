import { html_loader } from "./html_loader.mjs";
import { html_clear_scroll_top_centered_context } from "./html_clear_scroll_top_centered_context.mjs";
import { app_code_refresh_functions } from "./app_code_refresh_functions.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_code_refresh_main(context) {
  html_loader();
  return;
  let root = html_clear_scroll_top_centered_context(context);
  html_button_width_full_text_click(root, "Functions", async () => {
    await app_code_refresh_functions(context);
  });
}
