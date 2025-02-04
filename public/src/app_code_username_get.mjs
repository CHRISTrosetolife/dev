import { app_code } from "./app_code.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
export function app_code_username_get() {
  return storage_local_get(app_code, "username");
}
