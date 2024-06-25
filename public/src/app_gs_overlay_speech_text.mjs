import { html_style_font_color_white } from "./html_style_font_color_white.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_gs_overlay_speech } from "./app_gs_overlay_speech.mjs";
export function app_gs_overlay_speech_text(menu_overlay, text) {
  let div_pray_reminder = app_gs_overlay_speech(menu_overlay);
  let p = html_p_text(div_pray_reminder, text);
  html_style_font_color_white(p);
  return div_pray_reminder;
}
