import { storage_local_set } from "./storage_local_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function storage_local_set_context(context, property_name, value) {
  let app_fn = object_property_get(context, "app_fn");
  storage_local_set(app_fn, property_name, value);
}
