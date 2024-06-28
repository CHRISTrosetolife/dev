import { html_style_font_color_white } from "./html_style_font_color_white.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_gs_overlay_speech } from "./app_gs_overlay_speech.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function app_gs_overlay_speech_text(menu_overlay, text) {
  assert_arguments_length;
  let overlay_speech = app_gs_overlay_speech(menu_overlay);
  let p = html_p_text(overlay_speech, text);
  html_style_font_color_white(p);
  return overlay_speech;
}
