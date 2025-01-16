import { app_language_group_index_changed_inner } from "./app_language_group_index_changed_inner.mjs";
import { app_language_group_index_get } from "./app_language_group_index_get.mjs";
export async function app_language_group_index_changed(context) {
  let group_index = app_language_group_index_get(context);
  await app_language_group_index_changed_inner(context, group_index);
}
