import { storage_local_set } from "./storage_local_set.mjs";
import { storage_local_exists_not } from "./storage_local_exists_not.mjs";
export function storage_local_initialize_lambda(fn_namespace, key, value) {
  if (storage_local_exists_not(fn_namespace, key)) {
    storage_local_set(fn_namespace, key, value);
  }
}
