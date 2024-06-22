import { app_gs_conversation_player_prompt } from "./app_gs_conversation_player_prompt.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_slice } from "./list_slice.mjs";
import { each_index } from "./each_index.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_gs_bible_chapter_jas01 } from "./app_gs_bible_chapter_jas01.mjs";
import { app_gs_conversation_speech_npc } from "./app_gs_conversation_speech_npc.mjs";
import { html_clear } from "./html_clear.mjs";
import { error } from "./error.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_gs_conversation_opening } from "./app_gs_conversation_opening.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { app_gs_menu_overlay } from "./app_gs_menu_overlay.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { object_merge } from "./object_merge.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function app_gs_conversation(map_c, map, npc) {
  let menu_overlay = app_gs_menu_overlay(map_c, map);
  npc.conversation_count++;
  let text = app_gs_conversation_opening(map, npc);
  app_gs_conversation_speech_npc(menu_overlay, npc, text);
  let div_player = app_gs_conversation_player_prompt(menu_overlay);
  html_button_width_full_text_click(
    div_player,
    string_combine_multiple([
      "📖 Tell ",
      npc.name,
      " that Jesus ✝️ died, was 🪨 buried and 🤴🏽 rose to life!",
    ]),
    () => {
      if (npc.objection_count === 0) {
        error();
      } else {
        html_clear(menu_overlay);
        let book_name = "James";
        let chapter = "1";
        let verses = app_gs_bible_chapter_jas01();
        each_index(verses, (item, index) => {
          object_merge(item, {
            index,
          });
        });
        let objectables = list_filter(verses, (v) =>
          list_empty_not_is(v.objections),
        );
        let objectable = list_random_item(objectables);
        let { index } = objection;
        let objection = list_random_item(objectable.objections);
        let { count, text: object_text } = objection;
        let answer_verses = list_slice(verses, index, index + count);
        let answer_texts = list_map_property(answer_verses, "text");
        let answer = list_join_space(answer_texts);
        app_gs_conversation_speech_npc(menu_overlay, npc, object_text);
        let div_player = app_gs_conversation_player_prompt(menu_overlay);
        html_button_width_full_text_click(
          div_player,
          string_combine_multiple(["📖 Tell ", npc.name, " ", book_name, " "]),
        );
        npc.objection_count--;
      }
    },
  );
  html_button_width_full_text_click(
    div_player,
    "👋 Politely end the conversation after 🙏 praying",
    () => {
      html_remove(menu_overlay);
    },
  );
}
