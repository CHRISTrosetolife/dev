import { app_gs_phrase_combine } from "./app_gs_phrase_combine.mjs";
import { app_gs_conversation_npc_end } from "./app_gs_conversation_npc_end.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_gs_phrase_let_us } from "./app_gs_phrase_let_us.mjs";
import { app_gs_phrase_what_youve_said } from "./app_gs_phrase_what_youve_said.mjs";
import { app_gs_phrase_exclaim_or_period } from "./app_gs_phrase_exclaim_or_period.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_gs_phrase_thanks } from "./app_gs_phrase_thanks.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_random_or_empty } from "./string_random_or_empty.mjs";
export function app_gs_conversation_wait(context, menu_overlay, npc) {
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
          string_combine_multiple([" about ", app_gs_phrase_what_youve_said()]),
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
    context,
    menu_overlay,
    npc,
    app_gs_phrase_combine(sentences),
  );
}
