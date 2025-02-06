import { storage_local_initialize } from "./storage_local_initialize.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function storage_local_initialize_context_list(
  context,
  recent_property_name,
) {
  let app_fn = object_property_get(context, "app_fn");
  let questions_recent_stored = storage_local_initialize(
    app_fn,
    recent_property_name,
    [],
  );
  return questions_recent_stored;
}
