import { app_language_refresh_node } from "./app_language_refresh_node.mjs";
import { app_language_position_initial } from "./app_language_position_initial.mjs";
import { app_language_group_index_changed } from "./app_language_group_index_changed.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
export async function app_language_group_index_set(context, group_index_new) {
  storage_local_set(context.app_fn, "group_index", group_index_new);
  await app_language_group_index_changed(context);
  storage_local_set(
    context.app_fn,
    "position",
    app_language_position_initial(context),
  );
  await app_language_refresh_node(context);
}
