import { storage_local_initialize } from "./storage_local_initialize.mjs";
import { object_merge } from "./object_merge.mjs";
import { app_language_group_path } from "./app_language_group_path.mjs";
import { http_storage } from "./http_storage.mjs";
export async function app_language_group_index_changed(context) {
  let group_index = storage_local_initialize(context.app_fn, "group_index");
  let { group, definitions, inverted } = (result = await http_storage(
    app_language_group_path(
      context.language_learn,
      context.language_fluent,
      group_index,
    ),
  ));
  object_merge(context, {
    group,
    definitions,
    inverted,
  });
}
