import { list_first } from "./list_first.mjs";
import { log } from "./log.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_last } from "./list_last.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_join_br_br } from "./list_join_br_br.mjs";
import { app_gs_menu_study_bible_group } from "./app_gs_menu_study_bible_group.mjs";
import { app_gs_menu_study_bible_group_single } from "./app_gs_menu_study_bible_group_single.mjs";
import { app_memorize_groups_get } from "./app_memorize_groups_get.mjs";
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
import { list_get } from "./list_get.mjs";
import { object_merge } from "./object_merge.mjs";
import { list_slice } from "./list_slice.mjs";
export async function app_gs_menu_study_bible(menu_overlay, context) {
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
      let { context: memorize_context } = a;
      memorize_context.cleanup();
      html_clear(menu_overlay);
      let { game } = context;
      let { player } = game;
      let { energy } = player;
      let { group_current } = memorize_context;
      let gc_first = list_first(group_current);
      let gc_last = list_last(group_current);
      let sliced = list_slice(memorize_context.verses, gc_first, gc_last + 1);
      log({
        sliced,
        group_current,
        memorize_context,
      });
      let gain = list_map_sum(sliced, (s) =>
        list_size(object_property_get(s, "tokens")),
      );
      energy.conversation += gain;
      app_gs_overlay_speech_text(
        menu_overlay,
        list_join_br_br([
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
      let group_next = app_memorize_group_next(memorize_context);
      if (list_size_1(group_next)) {
        app_gs_menu_study_bible_group_single(
          menu_overlay,
          group_next,
          context,
          memorize_context,
        );
      } else {
        let gn_last = list_last(group_next);
        app_gs_menu_study_bible_group(
          menu_overlay,
          group_next,
          "s",
          context,
          memorize_context,
        );
        let { verses } = memorize_context;
        let v = list_get(verses, gn_last);
        let gv_index = list_index(verses, v);
        let v_index_next = gv_index + 1;
        let v_next = list_get(verses, v_index_next);
        let { verse_number } = v_next;
        let g = app_memorize_groups_get(memorize_context, verse_number);
        app_gs_menu_study_bible_group_single(
          menu_overlay,
          g,
          context,
          memorize_context,
        );
      }
      html_button_width_full_text_click(menu_overlay, "⬅️ No, go back", () =>
        html_remove(menu_overlay),
      );
    },
  };
  if (game.memorize.group_current) {
    object_merge(memorize_context, {
      group_current: game.memorize.group_current,
    });
  }
  await app_memorize_frame(memorize_context);
}
