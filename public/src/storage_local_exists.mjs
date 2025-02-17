import { storage_local_get } from "./storage_local_get.mjs";
export function storage_local_exists(fn_namespace, key) {
  let v = storage_local_get_unparsed(fn_namespace, key) !== null; 
  return v;
}
