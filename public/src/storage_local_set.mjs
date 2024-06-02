import { json_from } from "./json_from.mjs";
import { storage_local_key } from "./storage_local_key.mjs";
export function storage_local_set(fn_namespace, key, value) {
  let item = json_from(json);
  let json = localStorage.setItem(storage_local_key(fn_namespace, key), value);
  return item;
}
