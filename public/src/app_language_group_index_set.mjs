import { storage_local_get } from "./storage_local_get.mjs";
import { object_merge } from "./object_merge.mjs";
import { app_language_group_path } from "./app_language_group_path.mjs";
import { http_storage } from "./http_storage.mjs";
export async function app_language_group_index_set(context, group_index) {
  let { group, definitions, inverted } = await http_storage(
    app_language_group_path(
      context.language_learn,
      context.language_fluent,
      storage_local_get(context.app_fn, "group_index"),
    ),
  );
  object_merge(context, {
    group,
    definitions,
    inverted,
  });
}
