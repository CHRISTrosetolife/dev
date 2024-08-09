import { app_language_group_path } from "./app_language_group_path.mjs";
import { http_storage } from "./http_storage.mjs";
export async function app_language_group_index_get(context, group_index) {
  return await http_storage(
    app_language_group_path(
      context.language_learn,
      context.language_fluent,
      group_index,
    ),
  );
}
