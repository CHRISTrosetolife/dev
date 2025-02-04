import { storage_local_remove } from "./storage_local_remove.mjs";
import { app_code } from "./app_code.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_clear_scroll_top_centered_context } from "./html_clear_scroll_top_centered_context.mjs";
import { app_code_refresh_functions } from "./app_code_refresh_functions.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_code_refresh_menu(context) {
  let root = html_clear_scroll_top_centered_context(context);
  html_button_width_full_text_click(root, "Functions", async () => {
    await app_code_refresh_functions(context);
  });
  html_button_width_full_text_click(
    root,
    string_combine_multiple([
      "Log out: ",
      storage_local_get(app_code, "username"),
    ]),
    async () => {
      storage_local_remove(app_code, "username");
    },
  );
}
