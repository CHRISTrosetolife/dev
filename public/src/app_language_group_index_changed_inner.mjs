import { object_properties_new } from "./object_properties_new.mjs";
import { object_merge } from "./object_merge.mjs";
import { app_language_group_get } from "./app_language_group_get.mjs";
export async function app_language_group_index_changed_inner(
  context,
  group_index,
) {
  let result = await app_language_group_get(context, group_index);
  let chosen = object_properties_new();
  let { group, definitions, inverted } = result;
  object_merge(context, {
    group,
    definitions,
    inverted,
  });
}
