import { app_gs_div_rounded_transparent } from "./app_gs_div_rounded_transparent.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_gs_phrase_it_is } from "./app_gs_phrase_it_is.mjs";
import { app_gs_phrase_i_am } from "./app_gs_phrase_i_am.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { html_style_centered } from "./html_style_centered.mjs";
import { app_gs_phrase_very } from "./app_gs_phrase_very.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_gs_menu_overlay } from "./app_gs_menu_overlay.mjs";
import { string_combine } from "./string_combine.mjs";
import { html_style } from "./html_style.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
export function app_gs_conversation(map_c, map, npc) {
  let menu_overlay = app_gs_menu_overlay(map_c, map);
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
  let greeting = string_combine_multiple([
    list_random_item(["Hello", "Hey", "Greetings", "Hi"]),
    ", ",
    map.player.name,
    "!",
  ]);
  let greeting_pleased = string_combine_multiple([
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
          string_combine(app_gs_phrase_very(), "pleased"),
        ]),
      ]),
    ]),
    " to ",
    "meet you",
    "!",
  ]);
  let text = string_combine_multiple([
    list_join_space(["👋", greeting, introduction, greeting_pleased]),
  ]);
  let div = app_gs_div_rounded_transparent(div, "black", 0.51);
  let npc_speaking = html_p_text(div, string_combine(npc.name, " says :"));
  html_style_font_color(npc_speaking, "lightblue");
  let npc_speech = app_gs_div_rounded_transparent(div, "lightblue", 0.5);
  html_style_rounded_padded(npc_speech);
  html_inner_set(npc_speech, text);
  html_style_centered(div);
  html_style_rounded_padded(div);
  if (0) {
    let hr = html_hr(div);
    html_style(hr, {
      "background-color": "black",
      height: "1px",
      border: 0,
    });
  }
  let prompt = html_p_text(div, "What would you like to do?");
  html_style_font_color(prompt, "lightgreen");
  html_button_width_full_text_click(
    div,
    "👋 politely end the conversation after 🙏 praying",
    () => {
      html_remove(menu_overlay);
    },
  );
}
