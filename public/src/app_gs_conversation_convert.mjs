import { app_gs_conversation_npc_opening } from "./app_gs_conversation_npc_opening.mjs";
import { app_gs_phrase_i_am } from "./app_gs_phrase_i_am.mjs";
import { app_gs_phrase_convinced } from "./app_gs_phrase_convinced.mjs";
import { app_gs_phrase_thanks } from "./app_gs_phrase_thanks.mjs";
import { app_gs_phrase_gospel_verbs } from "./app_gs_phrase_gospel_verbs.mjs";
import { app_gs_phrase_combine_multiple } from "./app_gs_phrase_combine_multiple.mjs";
import { app_gs_phrase_doxology_or_empty } from "./app_gs_phrase_doxology_or_empty.mjs";
import { app_gs_phrase_the_gospel } from "./app_gs_phrase_the_gospel.mjs";
import { app_gs_phrase_jesus } from "./app_gs_phrase_jesus.mjs";
import { app_gs_phrase_exclaim_or_period } from "./app_gs_phrase_exclaim_or_period.mjs";
import { string_random_or_empty } from "./string_random_or_empty.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_gs_phrase_worship_multiple_or_empty } from "./app_gs_phrase_worship_multiple_or_empty.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_gs_conversation_convert(context, menu_overlay, npc) {
  npc.christian = true;
  app_gs_conversation_npc_opening(
    context,
    menu_overlay,
    npc,
    app_gs_phrase_combine_multiple([
      (app_gs_phrase_worship_multiple_or_empty(),
      [
        app_gs_phrase_doxology_or_empty(),
        list_random_item([
          string_combine_multiple([
            list_random_item([
              string_combine_multiple([
                app_gs_phrase_i_am(),
                " ",
                app_gs_phrase_convinced(),
              ]),
              string_combine_multiple([
                "You have ",
                app_gs_phrase_convinced(),
                " me",
              ]),
            ]),
            app_gs_phrase_exclaim_or_period(),
          ]),
          string_combine_multiple([
            app_gs_phrase_thanks(),
            " for ",
            list_random_item([
              string_combine_multiple([
                "sharing ",
                app_gs_phrase_the_gospel(),
                " with me",
              ]),
              string_combine_multiple([
                list_random_item([
                  "telling",
                  "taking the time to tell",
                  "persuading",
                  "convincing",
                ]),
                " me about ",
                app_gs_phrase_the_gospel(),
              ]),
            ]),
            app_gs_phrase_exclaim_or_period(),
          ]),
        ]),
        string_combine_multiple([
          "Now I believe ",
          list_random_item([
            string_combine_multiple(["in ", app_gs_phrase_jesus()]),
            string_combine_multiple([
              "that ",
              app_gs_phrase_jesus(),
              " ",
              list_random_item([
                string_combine_multiple([
                  app_gs_phrase_gospel_verbs(),
                  string_random_or_empty(
                    string_combine_multiple([
                      " with ",
                      list_random_item(["all my", "my whole"]),
                      " heart",
                    ]),
                  ),
                ]),
                string_combine_multiple([
                  "is ",
                  list_random_item([
                    string_combine_multiple([
                      "King",
                      string_random_or_empty(" of kings"),
                    ]),
                    string_combine_multiple([
                      "Lord",
                      string_random_or_empty(" of lords"),
                    ]),
                    "alive",
                    "reigning from on high",
                    string_combine_multiple([
                      "my ",
                      list_random_item([
                        string_combine_multiple([
                          "Savior",
                          string_random_or_empty(" and Lord"),
                        ]),
                        string_combine_multiple([
                          "Lord",
                          string_random_or_empty(" and Savior"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
          "!",
        ]),
      ]),
    ]),
  );
}
