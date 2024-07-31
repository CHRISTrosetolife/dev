import { app_memorize } from "./app_memorize.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
export function app_memorize_save(context) {
  storage_local_set(app_memorize, "save", context.save);
}
