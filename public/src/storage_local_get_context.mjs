import { storage_local_get } from "./storage_local_get.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function storage_local_get_context(context, property_name) {
  let app_fn = object_property_get(context, "app_fn");
  return storage_local_get(app_fn, property_name);
}
