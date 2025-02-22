import { storage_local_exists_context } from "./storage_local_exists_context.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
export function app_code_function_selected_get(context) {
  let key = "function_selected";
  let e = storage_local_exists_context(context, key);
  if (e) {
  }
  let v = storage_local_get_context(context, key);
  return v;
}
