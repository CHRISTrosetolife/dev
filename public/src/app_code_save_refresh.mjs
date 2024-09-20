import { app_code_refresh } from "./app_code_refresh.mjs";
import { app_code } from "./app_code.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { app_code_save_get } from "./app_code_save_get.mjs";
export async function app_code_save_refresh(root, lambda) {
  let save = app_code_save_get();
  lambda(save);
  storage_local_set(app_code, "save", save);
  await app_code_refresh(root);
  return save;
}
