import { storage_local_set } from "./storage_local_set.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
export function storage_local_toggle(fn, name) {
  let value = storage_local_get(fn, name);
  value = !value;
  storage_local_set(fn, name, value);
  let v = value;
  return v;
}
