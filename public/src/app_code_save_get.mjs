import { storage_local_get } from "./storage_local_get.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { app_code } from "./app_code.mjs";
import { storage_local_exists_not } from "./storage_local_exists_not.mjs";
export function app_code_save_get() {
  app_fn;
  if (storage_local_exists_not(app_code, "save")) {
    storage_local_set(app_code, "save", {});
  }
  let save = storage_local_get(app_code, "save");
  return save;
}
