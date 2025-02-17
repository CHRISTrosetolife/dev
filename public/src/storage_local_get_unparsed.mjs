import { storage_local_key } from "./storage_local_key.mjs";
export function storage_local_get_unparsed(fn_namespace, key) {
  let v = localStorage.getItem(storage_local_key(fn_namespace, key));
  return v;
}
