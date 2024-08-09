import { app_language_atom_title_patterns } from "./app_language_atom_title_patterns.mjs";
import { html_cycle_p } from "./html_cycle_p.mjs";
import { app_language_words } from "./app_language_words.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { app_language_group_get } from "./app_language_group_get.mjs";
import { app_language_group_index_set } from "./app_language_group_index_set.mjs";
import { add_1 } from "./add_1.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export async function app_language_refresh_menu(context) {
  let { root } = context;
  html_clear_scroll_top_centered(root);
  let { groups } = await app_language_group_get(context, "index");
  await each_index_async(groups, async (group_info, group_index) => {
    let button = html_button_width_full_text_click(root, "", async () => {
      await app_language_group_index_set(context, group_index);
    });
    html_cycle_p(
      button,
      app_language_atom_title_patterns(),
      add_1(group_index) +
        ". " +
        app_language_words(group_info.first, group_info.last, false),
    );
  });
}
