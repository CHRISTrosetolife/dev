import { storage_local_initialize } from "./storage_local_initialize.mjs";
export function app_language_group_index_get(context) {
  return storage_local_initialize(context.app_fn, "group_index", 0);
}
