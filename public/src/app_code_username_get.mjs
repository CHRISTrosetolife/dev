import { object_property_get } from "./object_property_get.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
export function app_code_username_get() {
  let app_fn = object_property_get(context, "app_fn");
  let v = storage_local_get(app_fn, "username");
  return v;
}
