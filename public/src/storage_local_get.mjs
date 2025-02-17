import { storage_local_get_unparsed } from "./storage_local_get_unparsed.mjs";
import { json_from } from "./json_from.mjs";
export function storage_local_get(fn_namespace, key) {
  let json = storage_local_get_unparsed(fn_namespace, key);
  let v = json_from(json);
  return v;
}
