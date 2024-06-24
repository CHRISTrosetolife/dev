import { app_gs_npc_conversation_wait } from "./app_gs_npc_conversation_wait.mjs";
import { log } from "./log.mjs";
import { app_gs_phrase_what_youve_said } from "./app_gs_phrase_what_youve_said.mjs";
import { app_gs_phrase_exclaim_or_period } from "./app_gs_phrase_exclaim_or_period.mjs";
import { app_gs_phrase_let_us } from "./app_gs_phrase_let_us.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_gs_conversation_npc_end } from "./app_gs_conversation_npc_end.mjs";
import { app_gs_conversation_npc_opening_text } from "./app_gs_conversation_npc_opening_text.mjs";
import { app_gs_conversation_npc_opening } from "./app_gs_conversation_npc_opening.mjs";
import { app_gs_menu_overlay } from "./app_gs_menu_overlay.mjs";
import { string_random_or_empty } from "./string_random_or_empty.mjs";
import { app_gs_phrase_combine } from "./app_gs_phrase_combine.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_gs_phrase_thanks } from "./app_gs_phrase_thanks.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function app_gs_conversation(context, npc) {
  assert_arguments_length(arguments, 2);
  let menu_overlay = app_gs_menu_overlay(context);
  map.player.conversation_count++;
  npc.conversation_count++;
  if (app_gs_npc_conversation_wait(context, npc)) {
    log({
      player: map.player,
      npc,
    });
    let sentences = [
      string_random_or_empty(
        string_combine_multiple([
          app_gs_phrase_thanks(),
          " for ",
          list_random_item([
            "sharing",
            string_combine_multiple([
              " ",
              list_random_item(["speaking", "talking"]),
              " with me",
            ]),
          ]),
          ", before",
          app_gs_phrase_exclaim_or_period(),
        ]),
      ),
      string_combine_multiple([
        "I need",
        string_combine_multiple([
          " some time",
          string_random_or_empty(" to myself"),
          " to ",
          list_random_item(["think", "ponder"]),
          string_random_or_empty(
            string_combine_multiple([
              " about ",
              app_gs_phrase_what_youve_said(),
            ]),
          ),
          ".",
        ]),
      ]),
      string_random_or_empty(
        string_combine_multiple([app_gs_phrase_let_us(), " talk later", "."]),
      ),
    ];
    list_shuffle(sentences);
    app_gs_conversation_npc_end(
      menu_overlay,
      npc,
      app_gs_phrase_combine(sentences),
      map,
    );
  } else {
    let text = app_gs_conversation_npc_opening_text(map, npc);
    app_gs_conversation_npc_opening(menu_overlay, npc, text, map);
  }
}
