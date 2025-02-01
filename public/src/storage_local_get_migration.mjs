import { storage_local_exists_not } from "./storage_local_exists_not.mjs";
export function storage_local_get_migration(fn_namespace, key) {
  if (storage_local_exists_not(fn_namespace, key)) {
  }
}
