import { app_gs_menu_study_bible_group } from "./app_gs_menu_study_bible_group.mjs";
import { app_gs_menu_study_bible_group_single } from "./app_gs_menu_study_bible_group_single.mjs";
import { app_memorize_groups_get } from "./app_memorize_groups_get.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { list_index } from "./list_index.mjs";
import { app_memorize_group_next } from "./app_memorize_group_next.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_remove } from "./html_remove.mjs";
import { app_gs_overlay_speech_text } from "./app_gs_overlay_speech_text.mjs";
import { error } from "./error.mjs";
import { app_memorize_frame } from "./app_memorize_frame.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_size } from "./list_size.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_get } from "./list_get.mjs";
import { object_merge } from "./object_merge.mjs";
export async function app_gs_menu_study_bible(
  menu_overlay,
  additional,
  context,
) {
  html_clear(menu_overlay);
  let memorize_context = {
    short: true,
    settings: false,
    root: menu_overlay,
    style: {
      text: {
        color: "white",
      },
      spacer2: {
        color: "lightgreen",
        "background-color": "lightgreen",
      },
      error: {
        color: "salmon",
      },
    },
    group_next: (a) => {
      html_clear(menu_overlay);
      let { tokens } = a;
      let { player } = context.game;
      let { energy } = player;
      let gain = list_size(tokens);
      energy.conversation += gain;
      app_gs_overlay_speech_text(
        list_join_space([
          string_combine_multiple([
            "You gained ",
            gain,
            " conversation energy.",
          ]),
          string_combine_multiple([
            "You now have ",
            energy.conversation,
            " conversation energy.",
          ]),
          "Would you like to study the 📖 bible some more?",
        ]),
      );
      let { context: memorize_context } = a;
      let group_next = app_memorize_group_next(memorize_context);
      let [gn_first, gn_last] = group_next;
      if (gn_first === gn_last) {
        app_gs_menu_study_bible_group_single(menu_overlay, group_next, context);
      } else {
        app_gs_menu_study_bible_group(menu_overlay, g, "s", context);
        let { verses } = memorize_context;
        let gn_last_verse = list_find_property(verses, "verse_number", gn_last);
        let gn_last_verse_index = list_index(verses, gn_last_verse);
        let gn_last_verse_index_next = gn_last_verse_index + 1;
        let gn_last_verse_next = list_get(verses, gn_last_verse_index_next);
        let { verse_number } = gn_last_verse_next;
        let g = app_memorize_groups_get(
          context,
          string_combine_multiple([verse_number, "-", verse_number]),
        );
        app_gs_menu_study_bible_group_single(menu_overlay, g, context);
      }
      html_button_width_full_text_click(menu_overlay, "⬅️ No, go back");
      html_remove(menu_overlay);
    },
  };
  object_merge(memorize_context, additional);
  await app_memorize_frame(memorize_context);
}
