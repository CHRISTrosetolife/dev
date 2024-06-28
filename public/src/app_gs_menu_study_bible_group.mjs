import { app_gs_save } from "./app_gs_save.mjs";
import { app_gs_menu_study_bible } from "./app_gs_menu_study_bible.mjs";
import { app_memorize_group_to_range_string } from "./app_memorize_group_to_range_string.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_gs_menu_study_bible_group(
  menu_overlay,
  g,
  extra,
  context,
  memorize_context,
) {
  html_button_width_full_text_click(
    menu_overlay,
    string_combine_multiple([
      "📖 Yes, study the bible more with verse",
      extra,
      ": ",
      app_memorize_group_to_range_string(memorize_context, g),
    ]),
    async () => {
      let { game } = context;
      game.memorize.group_current = g;
      app_gs_save;
      await app_gs_menu_study_bible(menu_overlay, context);
    },
  );
}
