import { storage_local_set } from "./storage_local_set.mjs";
import { list_beginning_unique_take } from "./list_beginning_unique_take.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function storage_local_recent_add(
  context,
  recent_property_name,
  recent_item_new,
  recent_limit,
) {
  let app_fn2 = object_property_get(context, "app_fn");
  let app_fn = object_property_get(context, "app_fn");
  let questions_recent_stored = storage_local_initialize(
    app_fn,
    recent_property_name,
    [],
  );
  questions_recent_stored = list_beginning_unique_take(
    questions_recent_stored,
    recent_item_new,
    recent_limit,
  );
  storage_local_set(app_fn2, recent_property_name, questions_recent_stored);
}
