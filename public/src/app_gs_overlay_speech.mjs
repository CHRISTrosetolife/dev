import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { html_style_centered } from "./html_style_centered.mjs";
import { app_gs_div_rounded_transparent } from "./app_gs_div_rounded_transparent.mjs";
export function app_gs_overlay_speech(menu_overlay) {
  let result = app_gs_div_rounded_transparent(menu_overlay, "black", 51);
  html_style_centered(result);
  html_style_rounded_padded(result);
  return result;
}
