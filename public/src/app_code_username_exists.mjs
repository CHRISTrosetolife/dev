import { app_code } from "./app_code.mjs";
import { storage_local_exists } from "./storage_local_exists.mjs";
export function app_code_username_exists() {
  return storage_local_exists(app_code, "username");
}
