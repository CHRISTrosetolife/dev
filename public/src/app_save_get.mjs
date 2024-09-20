import { storage_local_get } from "./storage_local_get.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { storage_local_exists_not } from "./storage_local_exists_not.mjs";
export function app_save_get(app_fn) {
  if (storage_local_exists_not(app_fn, "save")) {
    storage_local_set(app_fn, "save", {});
  }
  let save = storage_local_get(app_fn, "save");
  return save;
}
