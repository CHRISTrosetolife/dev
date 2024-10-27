import { app_save_set } from "./app_save_set.mjs";
import { app_save_get } from "./app_save_get.mjs";
export async function app_save_change(app_fn, lambda) {
  let save = app_save_get(app_fn);
  await lambda(save);
  app_save_set(app_fn, save);
  return save;
}
