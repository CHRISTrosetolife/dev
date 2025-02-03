import { http_storage_get } from "./http_storage_get.mjs";
import { app_language_group_path } from "./app_language_group_path.mjs";
export async function app_language_group_get(context, group_index) {
  return await http_storage_get(
    app_language_group_path(
      context.language_learn,
      context.language_fluent,
      group_index,
    ),
  );
}
