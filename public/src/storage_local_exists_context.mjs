import { storage_local_exists } from "./storage_local_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function storage_local_exists_context(context, key) {
  let app_fn = object_property_get(context, "app_fn");
  let e = storage_local_exists(app_fn, key);
  return e;
}
