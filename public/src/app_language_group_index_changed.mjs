import { storage_local_initialize } from "./storage_local_initialize.mjs";
import { app_language_group_get } from "./app_language_group_get.mjs";
import { object_merge } from "./object_merge.mjs";
export async function app_language_group_index_changed(context) {
  let group_index = storage_local_initialize(app_fn, "group_index", 0);
  let result = await app_language_group_get(context, group_index);
  let { group, definitions, inverted } = result;
  object_merge(context, {
    group,
    definitions,
    inverted,
  });
}
