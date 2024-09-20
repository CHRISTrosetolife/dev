import { app_save_get } from "./app_save_get.mjs";
import { app_code } from "./app_code.mjs";
export function app_code_save_get() {
  let app_fn = app_code;
  return app_save_get(app_fn);
}
