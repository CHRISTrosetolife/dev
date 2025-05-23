import { object_property_get } from "./object_property_get.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
export function app_language_2_questions_recent_get(context) {
  let app_fn = object_property_get(context, "app_fn");
  return storage_local_initialize(app_fn, "questions_recent", []);
}
