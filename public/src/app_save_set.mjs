import { storage_local_set } from "./storage_local_set.mjs";
export function app_save_set(app_fn, save) {
  storage_local_set(app_fn, "save", save);
}
