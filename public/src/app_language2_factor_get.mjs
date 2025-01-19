import { storage_local_initialize } from "./storage_local_initialize.mjs";
export function app_language2_factor_get(app_fn) {
  return storage_local_initialize(app_fn, "factor", 1.2);
}
