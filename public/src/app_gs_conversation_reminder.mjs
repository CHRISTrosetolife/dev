import { app_gs_conversation_npc_opening } from "./app_gs_conversation_npc_opening.mjs";
import { app_gs_phrase_worship_multiple_or_empty } from "./app_gs_phrase_worship_multiple_or_empty.mjs";
import { app_gs_phrase_combine_multiple } from "./app_gs_phrase_combine_multiple.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_gs_phrase_jesus } from "./app_gs_phrase_jesus.mjs";
import { app_gs_phrase_gospel_verbs } from "./app_gs_phrase_gospel_verbs.mjs";
import { app_gs_phrase_doxology } from "./app_gs_phrase_doxology.mjs";
import { app_gs_phrase_the_gospel } from "./app_gs_phrase_the_gospel.mjs";
import { string_random_or_empty } from "./string_random_or_empty.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_gs_phrase_thanks } from "./app_gs_phrase_thanks.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_gs_conversation_reminder(context, menu_overlay, npc) {
  let list = [
    string_combine_multiple([
      app_gs_phrase_thanks(),
      " for ",
      list_random_item(["the reminder", "reminding me"]),
      string_random_or_empty(
        string_combine_multiple([" of ", app_gs_phrase_the_gospel()]),
      ),
      "!",
    ]),
    string_random_or_empty(
      string_combine_multiple([
        list_random_item(["Yes", "Indeed"]),
        ", ",
        app_gs_phrase_jesus(),
        " ",
        app_gs_phrase_gospel_verbs(),
        "!",
      ]),
    ),
    string_random_or_empty(
      string_combine_multiple([" ", app_gs_phrase_doxology()]),
    ),
  ];
  list_shuffle(list);
  let text = app_gs_phrase_combine_multiple([
    app_gs_phrase_worship_multiple_or_empty(),
    list,
  ]);
  app_gs_conversation_npc_opening(context, menu_overlay, npc, text);
}
