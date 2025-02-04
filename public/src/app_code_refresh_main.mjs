import { app_code_refresh_menu } from "./app_code_refresh_menu.mjs";
import { app_code_refresh_username } from "./app_code_refresh_username.mjs";
import { app_code } from "./app_code.mjs";
import { storage_local_exists_not } from "./storage_local_exists_not.mjs";
export function app_code_refresh_main(context) {
  if (storage_local_exists_not(app_code, "username")) {
    app_code_refresh_username(context);
  } else {
    app_code_refresh_menu(context);
  }
}
