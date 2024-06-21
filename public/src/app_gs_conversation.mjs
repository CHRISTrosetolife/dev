import { app_gs_phrase_i_am } from "./app_gs_phrase_i_am.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { html_style_centered } from "./html_style_centered.mjs";
import { html_style_background_color_black_alpha } from "./html_style_background_color_black_alpha.mjs";
import { html_p_text } from "./html_p_text.mjs";
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
        "It",
        list_random_item([" i", "'"]),
        "s",
        " ",
        app_gs_phrase_very(),
        list_random_item(["wonderful", "nice"]),
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
  let p = html_p_text(menu_overlay, text);
  html_style_background_color_black_alpha(p, 0.51);
  html_style_centered(p);
  html_style_rounded_padded(p);
  html_style_font_color(p, "white");
  html_button_width_full_text_click(
    menu_overlay,
    "👋 politely end the conversation after 🙏 praying",
    () => {
      html_remove(menu_overlay);
    },
  );
}
