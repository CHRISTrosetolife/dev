import { storage_local_set } from "./storage_local_set.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
export function storage_local_increment(app_fn, name) {
  let cnt = storage_local_initialize(app_fn, name, 0);
  cnt++;
  storage_local_set(app_fn, name, cnt);
}
