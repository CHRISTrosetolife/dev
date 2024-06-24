import { storage_local_key } from "./storage_local_key.mjs";
export function storage_local_remove(fn_namespace, key) {
  localStorage.removeItem(storage_local_key(fn_namespace, key));
}
