import { storage_local_set } from "./storage_local_set.mjs";
import { app_save_get } from "./app_save_get.mjs";
export async function app_save_change(app_fn, lambda) {
  let save = app_save_get(app_fn);
  await lambda(save);
  storage_local_set(app_fn, "save", save);
  return save;
}
