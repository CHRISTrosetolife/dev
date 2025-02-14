import { fn_name } from "./fn_name.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
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
}
