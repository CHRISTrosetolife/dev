import { app_language_group_index_get } from "./app_language_group_index_get.mjs";
import { app_language_group_get } from "./app_language_group_get.mjs";
import { object_merge } from "./object_merge.mjs";
export async function app_language_group_index_changed(context) {
  let group_index = app_language_group_index_get();
  let result = await app_language_group_get(context, group_index);
  let { group, definitions, inverted } = result;
  object_merge(context, {
    group,
    definitions,
    inverted,
  });
}
