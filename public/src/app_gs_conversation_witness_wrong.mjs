import { app_gs_conversation_npc_end } from "./app_gs_conversation_npc_end.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_gs_phrase_convinced } from "./app_gs_phrase_convinced.mjs";
import { app_gs_phrase_i_am } from "./app_gs_phrase_i_am.mjs";
import { app_gs_phrase_you_have } from "./app_gs_phrase_you_have.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_gs_phrase_thanks } from "./app_gs_phrase_thanks.mjs";
import { string_random_or_empty } from "./string_random_or_empty.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_gs_npc_conversation_wait_count } from "./app_gs_npc_conversation_wait_count.mjs";
export function app_gs_conversation_witness_wrong(npc, map, menu_overlay) {
  npc.conversation_wait_until =
    map.player.conversation_count + app_gs_npc_conversation_wait_count();
  let npc_text = string_combine_multiple([
    string_random_or_empty(
      string_combine_multiple([
        app_gs_phrase_thanks(),
        " for ",
        list_random_item([
          "the conversation",
          string_combine_multiple([
            "what ",
            app_gs_phrase_you_have(),
            " ",
            list_random_item([
              string_combine_multiple([
                "said",
                string_random_or_empty(" to me"),
              ]),
              string_combine_multiple([
                "shared",
                string_random_or_empty(" with me"),
              ]),
            ]),
          ]),
        ]),
        ". However, ",
      ]),
    ),
    app_gs_phrase_i_am(),
    " not ",
    string_random_or_empty("quite "),
    list_random_item([
      string_combine_multiple([
        string_random_or_empty("yet "),
        app_gs_phrase_convinced(),
      ]),
      string_combine_multiple([
        app_gs_phrase_convinced(),
        string_random_or_empty(", yet"),
      ]),
    ]),
    ".",
  ]);
  html_clear(menu_overlay);
  app_gs_conversation_npc_end(menu_overlay, npc, npc_text);
}
