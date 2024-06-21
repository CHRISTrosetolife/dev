import { random_50_50 } from "./random_50_50.mjs";
import { html_style_units } from "./html_style_units.mjs";
import { html_style } from "./html_style.mjs";
import { html_div } from "./html_div.mjs";
import { app_gs_overlay_speech } from "./app_gs_overlay_speech.mjs";
import { app_gs_div_rounded_transparent } from "./app_gs_div_rounded_transparent.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_gs_phrase_it_is } from "./app_gs_phrase_it_is.mjs";
import { app_gs_phrase_i_am } from "./app_gs_phrase_i_am.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { app_gs_phrase_very } from "./app_gs_phrase_very.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_gs_menu_overlay } from "./app_gs_menu_overlay.mjs";
import { string_combine } from "./string_combine.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { list_add } from "./list_add.mjs";
export function app_gs_conversation(map_c, map, npc) {
  let greeting = string_combine_multiple([
    list_random_item(["Hello", "Hey", "Greetings", "Hi"]),
    ", ",
    map.player.name,
    "!",
  ]);
  let opening = ["👋", greeting];
  if (npc.meet === true) {
    if (random_50_50()) {
      list_add(
        opening,
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
          "to ",
          list_random_item(["talk to", "see"]),
          " you again",
        ]),
      );
    }
  } else {
    npc.meet = true;
    let introduction = string_combine_multiple([
      list_random_item([
        string_combine_multiple([app_gs_phrase_i_am(), " called"]),
        "My name is",
        "I go by",
        "They call me",
        "You can call me",
        "Please call me",
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
        "meet you",
        "!",
      ]);
      list_add(opening, nice_to_meet);
    }
  }
  list_add(
    opening,
    string_combine_multiple([
      "What",
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
      "?",
    ]),
  );
  let text = string_combine_multiple([list_join_space(opening)]);
  let menu_overlay = app_gs_menu_overlay(map_c, map);
  let div_npc = app_gs_overlay_speech(menu_overlay);
  let npc_speaking = html_p_text(div_npc, string_combine(npc.name, " says :"));
  let npc_color = "lightblue";
  html_style_font_color(npc_speaking, npc_color);
  let npc_speech = app_gs_div_rounded_transparent(div_npc, npc_color, 75);
  html_style_rounded_padded(npc_speech);
  html_inner_set(npc_speech, text);
  let spacer_vertical = html_div(menu_overlay);
  html_style(spacer_vertical, {
    height: html_style_units(2),
  });
  let div_player = app_gs_overlay_speech(menu_overlay);
  let prompt = html_p_text(div_player, "What would you like to do?");
  html_style_font_color(prompt, "lightgreen");
  html_button_width_full_text_click(
    div_player,
    "👋 politely end the conversation after 🙏 praying",
    () => {
      html_remove(menu_overlay);
    },
  );
}
