import { app_gs_menu_study_bible } from "./app_gs_menu_study_bible.mjs";
import { app_memorize_group_to_range_string } from "./app_memorize_group_to_range_string.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_gs_menu_study_bible_group(menu_overlay, g) {
  let extra = "";
  html_button_width_full_text_click(
    menu_overlay,
    string_combine_multiple([
      "📖 Yes, study the bible more with verse",
      extra,
      ": ",
      app_memorize_group_to_range_string(context, g),
    ]),
    async () => {
      await app_gs_menu_study_bible(menu_overlay, {
        group_current: g,
      });
    },
  );
}
