import { storage_local_exists } from "./storage_local_exists.mjs";
import { app_code_refresh_menu } from "./app_code_refresh_menu.mjs";
import { app_code_refresh_username } from "./app_code_refresh_username.mjs";
import { app_code } from "./app_code.mjs";
export function app_code_refresh_main(context) {
  if (storage_local_exists(app_code, "username")) {
    app_code_refresh_menu(context);
  } else {
    app_code_refresh_username(context);
  }
}
