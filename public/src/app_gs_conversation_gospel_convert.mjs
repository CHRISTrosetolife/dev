import { list_concat } from "./list_concat.mjs";
import { app_gs_phrase_combine } from "./app_gs_phrase_combine.mjs";
import { app_gs_phrase_doxology_or_empty } from "./app_gs_phrase_doxology_or_empty.mjs";
import { app_gs_phrase_the_gospel } from "./app_gs_phrase_the_gospel.mjs";
import { app_gs_conversation_root } from "./app_gs_conversation_root.mjs";
import { app_gs_phrase_jesus } from "./app_gs_phrase_jesus.mjs";
import { app_gs_phrase_exclaim_or_period } from "./app_gs_phrase_exclaim_or_period.mjs";
import { string_random_or_empty } from "./string_random_or_empty.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_gs_phrase_worship_multiple_or_empty } from "./app_gs_phrase_worship_multiple_or_empty.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_gs_conversation_speech_npc } from "./app_gs_conversation_speech_npc.mjs";
export function app_gs_conversation_gospel_convert(menu_overlay, npc) {
  npc.christian = true;
  app_gs_conversation_speech_npc(
    menu_overlay,
    npc,
    app_gs_phrase_combine(
      list_concat([
        app_gs_phrase_worship_multiple_or_empty(),
        app_gs_phrase_doxology_or_empty(),
        list_random_item([
          string_combine_multiple([
            "You have ",
            string_random_or_empty(
              string_combine_multiple([
                list_random_item(["fully", "completely"]),
                " ",
              ]),
            ),
            list_random_item(["convinced", "persuaded"]),
            " me",
            app_gs_phrase_exclaim_or_period(),
          ]),
          string_combine_multiple([
            "Thank you for ",
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
          ]),
        ]),
        string_combine_multiple([
          string_random_or_empty("Now "),
          "I believe ",
          list_random_item([
            string_combine_multiple(["in ", app_gs_phrase_jesus()]),
            string_combine_multiple([
              "that ",
              app_gs_phrase_jesus(),
              " ",
              list_random_item([
                string_combine_multiple([
                  string_random_or_empty(
                    string_combine_multiple([
                      "died",
                      string_random_or_empty(", was buried"),
                      " and ",
                    ]),
                  ),
                  "rose to life",
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
    ),
  );
  app_gs_conversation_root(menu_overlay, npc);
}
