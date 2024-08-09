import { app_language_position_initial } from "./app_language_position_initial.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { app_language_refresh_node } from "./app_language_refresh_node.mjs";
import { app_language_group_index_set } from "./app_language_group_index_set.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { each_range_async } from "./each_range_async.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export async function app_language_refresh_menu(context) {
  let { root } = context;
  html_clear_scroll_top_centered(root);
  await each_range_async(2, async (item) => {
    html_button_width_full_text_click(root, item, async () => {
      storage_local_set(context.app_fn, "group_index", item);
      await app_language_group_index_set(context, item);
      storage_local_set(
        context.app_fn,
        "position",
        app_language_position_initial(context),
      );
      await app_language_refresh_node(context);
    });
  });
}
