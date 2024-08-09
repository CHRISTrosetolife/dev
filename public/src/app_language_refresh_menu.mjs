import { app_language_group_index_set } from "./app_language_group_index_set.mjs";
import { app_language_group_index_get } from "./app_language_group_index_get.mjs";
import { add_1 } from "./add_1.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { each_range_async } from "./each_range_async.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export async function app_language_refresh_menu(context) {
  let { root } = context;
  html_clear_scroll_top_centered(root);
  let { count } = await app_language_group_index_get(context, "index");
  await each_range_async(count, async (group_index) => {
    html_button_width_full_text_click(
      root,
      "group " + add_1(group_index),
      async () => {
        await app_language_group_index_set(context, group_index);
      },
    );
  });
}
