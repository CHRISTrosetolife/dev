import { app_code_screen_set } from "./app_code_screen_set.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_username_exists } from "./app_code_username_exists.mjs";
import { app_code_refresh_menu } from "./app_code_refresh_menu.mjs";
import { app_code_refresh_username } from "./app_code_refresh_username.mjs";
export function app_code_refresh_main(context) {
  app_code_screen_set(context, fn_name("app_code_refresh_main"));
  if (app_code_username_exists()) {
    app_code_refresh_menu(context);
  } else {
    app_code_refresh_username(context);
  }
}
