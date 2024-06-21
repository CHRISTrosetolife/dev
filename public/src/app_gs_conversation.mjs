import { html_style_font_color_white } from "./html_style_font_color_white.mjs";
import { html_div } from "./html_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_gs_phrase_it_is } from "./app_gs_phrase_it_is.mjs";
import { app_gs_phrase_i_am } from "./app_gs_phrase_i_am.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { html_style_centered } from "./html_style_centered.mjs";
import { html_style_background_color_black_alpha } from "./html_style_background_color_black_alpha.mjs";
import { app_gs_phrase_very } from "./app_gs_phrase_very.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_gs_menu_overlay } from "./app_gs_menu_overlay.mjs";
import { string_combine } from "./string_combine.mjs";
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
          string_combine([app_gs_phrase_very(), "pleased"]),
        ]),
      ]),
    ]),
    " to meet you!",
  ]);
  let text = string_combine_multiple([
    list_join_space(["👋", greeting, introduction, greeting_pleased]),
  ]);
  let div = html_div(menu_overlay);
  html_p_text(div, string_combine(npc.name, " says :"));
  html_p_text(div, text);
  html_style_background_color_black_alpha(div, 0.51);
  html_style_centered(div);
  html_style_rounded_padded(div);
  html_style_font_color_white(div);
  html_p_text(div, "What would you like to do?");
  html_button_width_full_text_click(
    div,
    "👋 politely end the conversation after 🙏 praying",
    () => {
      html_remove(menu_overlay);
    },
  );
}
