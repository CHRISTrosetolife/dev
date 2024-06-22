import { app_gs_phrase_exclaim_or_period } from "./app_gs_phrase_exclaim_or_period.mjs";
import { app_gs_phrase_let_us } from "./app_gs_phrase_let_us.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_gs_conversation_npc_end } from "./app_gs_conversation_npc_end.mjs";
import { app_gs_conversation_npc_opening_text } from "./app_gs_conversation_npc_opening_text.mjs";
import { app_gs_conversation_npc_opening } from "./app_gs_conversation_npc_opening.mjs";
import { app_gs_menu_overlay } from "./app_gs_menu_overlay.mjs";
import { string_random_or_empty } from "./string_random_or_empty.mjs";
import { app_gs_phrase_you_have } from "./app_gs_phrase_you_have.mjs";
import { app_gs_phrase_combine } from "./app_gs_phrase_combine.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_gs_phrase_thanks } from "./app_gs_phrase_thanks.mjs";
export function app_gs_conversation(map_c, map, npc) {
  let menu_overlay = app_gs_menu_overlay(map_c, map);
  map.player.conversation_count++;
  npc.conversation_count++;
  if (map.player.conversation_count < npc.conversation_wait_until) {
    let sentences = [
      string_combine_multiple([
        app_gs_phrase_thanks(),
        " for ",
        list_random_item(["sharing"]),
        string_combine_multiple([
          " ",
          list_random_item(["speaking", "talking"]),
          " with me",
        ]),
        app_gs_phrase_exclaim_or_period(),
      ]),
      string_combine_multiple([
        "I need",
        string_combine_multiple([
          " some time",
          string_random_or_empty(" to myself"),
          " to ",
          list_random_item(["think", "ponder"]),
          string_random_or_empty(
            " about what ",
            app_gs_phrase_you_have(),
            list_random_item(["said", "spoken"]),
            string_random_or_empty(" to me"),
          ),
          ".",
        ]),
      ]),
      string_random_or_empty(
        string_combine_multiple([
          app_gs_phrase_let_us(),
          "talk ",
          string_random_or_empty("some time"),
          "later",
        ]),
      ),
    ];
    list_shuffle(sentences);
    app_gs_conversation_npc_end(
      menu_overlay,
      npc,
      app_gs_phrase_combine(sentences),
    );
  } else {
    let text = app_gs_conversation_npc_opening_text(map, npc);
    app_gs_conversation_npc_opening(menu_overlay, npc, text, map);
  }
}
