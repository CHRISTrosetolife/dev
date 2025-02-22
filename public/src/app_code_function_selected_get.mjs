import { storage_local_exists } from "./storage_local_exists.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
export function app_code_function_selected_get(context) {
  if (false) {
    storage_local_exists();
  }
  let v = storage_local_get_context(context, "function_selected");
  return v;
}
