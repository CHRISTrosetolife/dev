import { app_language_refresh_node } from "./app_language_refresh_node.mjs";
import { app_ceb } from "./app_ceb.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
export async function app_language_refresh_node_left_right(
  context,
  left_next,
  right_next,
) {
  storage_local_set(app_ceb, "position", {
    left: left_next,
    right: right_next,
  });
  await app_language_refresh_node(context);
}
