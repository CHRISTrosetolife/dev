import { app_code_button_menu_app } from "./app_code_button_menu_app.mjs";
import { app_code_refresh_function } from "./app_code_refresh_function.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_back_after } from "./html_button_back_after.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { html_clear_scroll_top_centered_context } from "./html_clear_scroll_top_centered_context.mjs";
export function app_code_refresh_function_menu(context) {
  let root = html_clear_scroll_top_centered_context(context);
  let function_selected = storage_local_get_context(
    context,
    "function_selected",
  );
  html_button_back_after(
    root,
    string_combine_multiple(["to function: ", function_selected]),
    async () => await app_code_refresh_function(context),
  );
  app_code_button_menu_app(context);
}
