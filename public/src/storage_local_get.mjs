import { json_from } from "./json_from.mjs";
import { storage_local_key } from "./storage_local_key.mjs";
export function storage_local_get(fn_namespace, key) {
  let json = localStorage.getItem(storage_local_key(fn_namespace, key));
  let item = json_from(json);
}
