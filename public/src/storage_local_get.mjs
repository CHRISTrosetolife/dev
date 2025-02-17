import { storage_local_get_checkless } from "./storage_local_get_checkless.mjs";
export function storage_local_get(fn_namespace, key) {
  $ex;
  let v = storage_local_get_checkless(fn_namespace, key);
  return v;
}
