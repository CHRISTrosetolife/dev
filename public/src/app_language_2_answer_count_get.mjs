import { storage_local_initialize } from "./storage_local_initialize.mjs";
export function app_language_2_answer_count_get(context) {
  let { app_fn } = context;
  return storage_local_initialize(app_fn, "answer_count", 4);
}
