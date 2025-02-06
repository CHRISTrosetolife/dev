import { fn_name } from "./fn_name.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
import { app_code_button_menu_app } from "./app_code_button_menu_app.mjs";
import { app_code_refresh_function } from "./app_code_refresh_function.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_back_after } from "./html_button_back_after.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
export function app_code_refresh_function_menu(context) {
  let root = app_code_screen_set(
    context,
    fn_name("app_code_refresh_function_menu"),
  );
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
