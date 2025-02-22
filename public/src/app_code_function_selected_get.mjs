import { object_property_get } from "./object_property_get.mjs";
import { storage_local_exists } from "./storage_local_exists.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
export function app_code_function_selected_get(context) {
  let key = "function_selected";
  let app_fn = object_property_get(context, "app_fn");
  let e = storage_local_exists(app_fn, key);
  if (e) {
  }
  let v = storage_local_get_context(context, key);
  return v;
}
