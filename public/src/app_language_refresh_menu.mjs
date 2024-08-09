import { app_language_group_index_set } from "./app_language_group_index_set.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { each_range_async } from "./each_range_async.mjs";
import { app_language_refresh_review } from "./app_language_refresh_review.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export async function app_language_refresh_menu(context) {
  let { root, language_fluent } = context;
  html_clear_scroll_top_centered(root);
  await each_range_async(2, async (item) => {
    html_button_width_full_text_click(root, item, async () => {
      app_language_refresh_review(context);
      await app_language_group_index_set(context, group_index);
    });
  });
}
