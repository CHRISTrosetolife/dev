import { storage_local_get_checkless } from "./storage_local_get_checkless.mjs";
export function storage_local_exists(fn_namespace, key) {
  return storage_local_get_checkless(fn_namespace, key) !== null;
}
