import { storage_local_initialize_context_list } from "./storage_local_initialize_context_list.mjs";
export function app_code_functions_recent_get(context) {
  return storage_local_initialize_context_list(context, "functions_recent");
}
