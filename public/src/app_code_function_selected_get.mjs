import { storage_local_exists_context } from "./storage_local_exists_context.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
export function app_code_function_selected_get(context) {
  let key = "function_selected";
  if (storage_local_exists_context(context, key)) {
    let v = storage_local_get_context(context, key);
    return v;
  }
  let v2 = null;
  return v2;
}
