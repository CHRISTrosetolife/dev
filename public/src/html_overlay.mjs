import { html_style_font_color_white } from "./html_style_font_color_white.mjs";
import { html_overlay_z } from "./html_overlay_z.mjs";
import { list_index } from "./list_index.mjs";
import { html_style_background_color_transparent_mix } from "./html_style_background_color_transparent_mix.mjs";
import { html_style } from "./html_style.mjs";
import { html_style_height_full } from "./html_style_height_full.mjs";
import { html_style_width_full } from "./html_style_width_full.mjs";
import { html_div } from "./html_div.mjs";
import { html_document_body } from "./html_document_body.mjs";
export function html_overlay(overlay_level_name) {
  let body = html_document_body();
  let overlay = html_div(body);
  html_style_width_full(overlay);
  html_style_height_full(overlay);
  html_style(overlay, {
    position: "fixed",
    top: 0,
    left: 0,
    "z-index": 9999 - list_index(html_overlay_z(), overlay_level_name),
    "background-color": "rgba(0, 0, 0, 0.15)",
  });
  html_style_background_color_transparent_mix(overlay, "black", 85);
  html_style_font_color_white(overlay);
  return overlay;
}
