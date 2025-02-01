import { storage_local_get_migration } from "./storage_local_get_migration.mjs";
import { storage_local_get_checkless } from "./storage_local_get_checkless.mjs";
export function storage_local_get(fn_namespace, key) {
  return storage_local_get_checkless(fn_namespace, key);
}
