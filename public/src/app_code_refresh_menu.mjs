import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { html_button } from "./html_button.mjs";
import { app_code_button_functions_search } from "./app_code_button_functions_search.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_username_get } from "./app_code_username_get.mjs";
import { app_code_username_exists } from "./app_code_username_exists.mjs";
import { app_code_refresh_main } from "./app_code_refresh_main.mjs";
import { storage_local_remove } from "./storage_local_remove.mjs";
import { app_code } from "./app_code.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_code_refresh_menu(context) {
  let root = app_code_screen_set(context, fn_name("app_code_refresh_menu"));
  app_code_button_functions_search(context);
  if (app_code_username_exists()) {
    html_button(
      root,
      string_combine_multiple(["Log out: ", app_code_username_get()]),
      () => {
        storage_local_remove(app_code, "username");
        app_code_refresh_main(context);
      },
    );
  }
  let functions_recent = storage_local_get_context(context, "functions_recent");
  if (false) {
  }
}
