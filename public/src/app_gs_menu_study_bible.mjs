import { app_memorize_group_to_range_string } from "./app_memorize_group_to_range_string.mjs";
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
export async function app_gs_menu_study_bible(menu_overlay) {
  html_clear(menu_overlay);
  await app_memorize_frame({
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
      let { tokens } = a;
      let { player } = context.game;
      let { energy } = player;
      let gain = list_size(tokens);
      energy.conversation += gain;
      html_clear(menu_overlay);
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
      if (gn_first !== gn_last) {
        html_button_width_full_text_click(
          menu_overlay,
          string_combine_multiple([
            "📖 Yes, study the bible more with verses ",
            app_memorize_group_to_range_string(context, group_next),
          ]),
        );
        let { groups } = memorize_context;
        let verses = memorize_context;
      }
      html_button_width_full_text_click(menu_overlay, "⬅️ No, go back");
      html_remove(menu_overlay);
    },
    short: true,
  });
}
