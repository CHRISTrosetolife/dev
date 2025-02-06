import { storage_local_get_context } from "./storage_local_get_context.mjs";
export function app_code_functions_recent_get(context) {
  return storage_local_get_context(context, "functions_recent");
}
