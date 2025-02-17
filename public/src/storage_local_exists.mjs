import { storage_local_get_unparsed } from "./storage_local_get_unparsed.mjs";
export function storage_local_exists(fn_namespace, key) {
  let v = storage_local_get_unparsed(fn_namespace, key) !== null;
  return v;
}
