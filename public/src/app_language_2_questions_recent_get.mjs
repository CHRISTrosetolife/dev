import { storage_local_initialize } from "./storage_local_initialize.mjs";
export function app_language_2_questions_recent_get(context) {
  return storage_local_initialize(app_fn, "questions_recent", []);
}
