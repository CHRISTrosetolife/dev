import { storage_local_exists } from "./storage_local_exists.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { storage_local_exists_not } from "./storage_local_exists_not.mjs";
import { json_from } from "./json_from.mjs";
import { storage_local_key } from "./storage_local_key.mjs";
export function storage_local_get(fn_namespace, key) {
  if (storage_local_exists_not(fn_namespace, key)) {
    let other = {
      name: "",
    };
    if (storage_local_exists(other, key)) {
      let migration = storage_local_get(other, key);
      storage_local_set(fn_namespace, key, migration);
    }
  }
  let json = localStorage.getItem(storage_local_key(fn_namespace, key));
  let item = json_from(json);
  return item;
}
