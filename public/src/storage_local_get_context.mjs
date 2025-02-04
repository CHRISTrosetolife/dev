import { storage_local_get } from "./storage_local_get.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function storage_local_get_context(property_name, context) {
  let app_fn = object_property_get(context, "app_fn");
  storage_local_get(app_fn, property_name, value);
}
