import { app_gs_conversation_npc_root } from "./app_gs_conversation_npc_root.mjs";
import { app_gs_phrase_doxology } from "./app_gs_phrase_doxology.mjs";
import { app_gs_phrase_the_gospel } from "./app_gs_phrase_the_gospel.mjs";
import { string_random_or_empty } from "./string_random_or_empty.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_gs_phrase_thanks } from "./app_gs_phrase_thanks.mjs";
import { app_gs_phrase_worship_multiple_or_empty } from "./app_gs_phrase_worship_multiple_or_empty.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_gs_phrase_combine_multiple } from "./app_gs_phrase_combine_multiple.mjs";
export function app_gs_conversation_gospel_reminder(menu_overlay, npc) {
  let text = app_gs_phrase_combine_multiple([
    app_gs_phrase_worship_multiple_or_empty(),
    [
      string_combine_multiple([
        app_gs_phrase_thanks(),
        " for ",
        list_random_item(["a reminder", "reminding me"]),
        string_random_or_empty(
          string_combine_multiple([" of ", app_gs_phrase_the_gospel()]),
        ),
        "!",
      ]),
      string_random_or_empty(
        string_combine_multiple([" ", app_gs_phrase_doxology()]),
      ),
    ],
  ]);
  app_gs_conversation_npc_root(menu_overlay, npc, text);
}
