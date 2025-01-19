import { object_property_get } from "./object_property_get.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
export function app_language2_factor_get(context) {
  let app_fn2 = object_property_get(context, "app_fn");
  return storage_local_initialize(app_fn, "factor", 1.2);
}
