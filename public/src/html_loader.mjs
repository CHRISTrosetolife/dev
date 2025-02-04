import { html_style_font_size_default_multiplied } from "./html_style_font_size_default_multiplied.mjs";
import { html_style_centered } from "./html_style_centered.mjs";
import { html_spacer_vertical_n } from "./html_spacer_vertical_n.mjs";
import { html_style_font_color_white } from "./html_style_font_color_white.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_background_color_transparent } from "./html_style_background_color_transparent.mjs";
import { html_style } from "./html_style.mjs";
import { html_style_height_full } from "./html_style_height_full.mjs";
import { html_style_width_full } from "./html_style_width_full.mjs";
import { html_div } from "./html_div.mjs";
import { html_document_body } from "./html_document_body.mjs";
export function html_loader() {
  let body = html_document_body();
  let overlay = html_div(body);
  html_style_width_full(overlay);
  html_style_height_full(overlay);
  html_style(overlay, {
    position: "fixed",
    top: 0,
    left: 0,
    "z-index": 9999,
  });
  html_style_background_color_transparent(overlay, "black", 85);
  let label = html_p_text(overlay, "Loading...");
  html_style_font_color_white(label);
  html_spacer_vertical_n(label, 10);
  html_style_centered(label);
  html_style_font_size_default_multiplied(label, 2);
  return overlay;
}
