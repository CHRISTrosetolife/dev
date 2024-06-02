import { storage_local_exists } from "./storage_local_exists.mjs";
export function storage_local_exists_not(fn_namespace, key) {
  return !storage_local_exists(fn_namespace, key);
}
