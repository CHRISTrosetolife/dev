import { fn_name } from "./fn_name.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
export function app_code_app_new(context) {
  let root = app_code_screen_set(context, fn_name("app_code_app_new"));
}
