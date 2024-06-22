import { string_empty_is } from "./string_empty_is.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_gs_overlay_speech } from "./app_gs_overlay_speech.mjs";
export function app_gs_conversation_player_prompt(menu_overlay, additional) {
  let div_player = app_gs_overlay_speech(menu_overlay);
  let prompt = html_p_text(
    div_player,
    string_combine_multiple([
      "What would you like to do?",
      string_empty_is(additional) ? "" : " ",
      additional,
    ]),
  );
  html_style_font_color(prompt, "lightgreen");
  return div_player;
}
