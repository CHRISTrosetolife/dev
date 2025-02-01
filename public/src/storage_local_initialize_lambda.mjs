import { storage_local_exists } from "./storage_local_exists.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { storage_local_exists_not } from "./storage_local_exists_not.mjs";
export function storage_local_initialize_lambda(fn_namespace, key, value_get) {
  if (storage_local_exists_not(fn_namespace, key)) {
    let other = {
      name: "",
    };
    if (storage_local_exists(other, key)) {
      let migration = storage_local_get(other, key);
      storage_local_set(fn_namespace, key, migration);
    } else {
      let value = value_get();
      storage_local_set(fn_namespace, key, value);
      return value;
    }
  }
  return storage_local_get(fn_namespace, key);
}
