import { app_gs_phrase_combine } from "./app_gs_phrase_combine.mjs";
import { app_gs_phrase_very } from "./app_gs_phrase_very.mjs";
import { string_combine } from "./string_combine.mjs";
import { app_gs_phrase_exclaim_or_period } from "./app_gs_phrase_exclaim_or_period.mjs";
import { app_gs_phrase_i_am } from "./app_gs_phrase_i_am.mjs";
import { app_gs_phrase_it_is } from "./app_gs_phrase_it_is.mjs";
import { list_add } from "./list_add.mjs";
import { equal_2 } from "./equal_2.mjs";
import { random_50_50 } from "./random_50_50.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_gs_conversation_npc_opening_text(map, npc) {
  let greeting = string_combine_multiple([
    list_random_item(["Hello", "Hey", "Greetings", "Hi"]),
    ", ",
    map.player.name,
    "!",
  ]);
  let opening = ["👋", greeting];
  if (npc.conversation_count >= 2) {
    if (random_50_50() || equal_2(npc.conversation_count)) {
      list_add(
        opening,
        string_combine_multiple([
          list_random_item([
            string_combine_multiple([
              app_gs_phrase_it_is(),
              " ",
              list_random_item(["good", "great", "wonderful", "nice"]),
            ]),
            string_combine_multiple([
              app_gs_phrase_i_am(),
              " ",
              list_random_item(["happy", "glad"]),
            ]),
          ]),
          " to ",
          list_random_item(["talk to", "see"]),
          " you again",
          app_gs_phrase_exclaim_or_period(),
        ]),
      );
    }
  } else {
    let introduction = string_combine_multiple([
      list_random_item([
        string_combine_multiple([app_gs_phrase_i_am(), " called"]),
        "My name is",
        "I go by",
        string_combine_multiple([
          list_random_item(["They", "You can", "Please"]),
          " call me",
        ]),
      ]),
      " ",
      npc.name,
      ".",
    ]);
    list_add(opening, introduction);
    if (random_50_50()) {
      let nice_to_meet = string_combine_multiple([
        list_random_item([
          string_combine_multiple([
            app_gs_phrase_it_is(),
            " ",
            list_random_item([
              "my pleasure",
              string_combine(
                app_gs_phrase_very(),
                list_random_item(["wonderful", "nice"]),
              ),
            ]),
          ]),
          string_combine_multiple([
            app_gs_phrase_i_am(),
            " ",
            list_random_item([
              "happy",
              "glad",
              string_combine(app_gs_phrase_very(), "pleased"),
            ]),
          ]),
        ]),
        " to ",
        list_random_item(["meet you", "make your acquaintance"]),
        app_gs_phrase_exclaim_or_period(),
      ]);
      list_add(opening, nice_to_meet);
    }
  }
  list_add(
    opening,
    string_combine_multiple([
      "What",
      list_random_item([
        string_combine_multiple([list_random_item(["'", " i"]), "s up"]),
        string_combine_multiple([
          " ",
          list_random_item([
            string_combine_multiple([
              "is on your ",
              list_random_item(["heart", "mind"]),
            ]),
            string_combine_multiple([
              list_random_item(["do you want", "would you like"]),
              " to talk about",
            ]),
          ]),
        ]),
      ]),
      "?",
    ]),
  );
  let text = app_gs_phrase_combine(opening);
  return text;
}
