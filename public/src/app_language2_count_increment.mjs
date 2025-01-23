import { storage_local_set } from "./storage_local_set.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
export function app_language2_count_increment(context) {
  let { app_fn } = context;
  let cnt = storage_local_initialize(app_fn, "count", 0);
  cnt++;
  storage_local_set(app_fn, "count", cnt);
}
