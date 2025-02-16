import { object_property_get } from "./object_property_get.mjs";
import { storage_local_exists } from "./storage_local_exists.mjs";
export function app_code_username_exists(context) {
  let app_fn = object_property_get(context, "app_fn");
  let v = storage_local_exists(app_fn, "username");
  return v;
}
