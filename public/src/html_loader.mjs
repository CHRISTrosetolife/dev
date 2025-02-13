import { fn_name } from "./fn_name.mjs";
import { html_overlay } from "./html_overlay.mjs";
import { html_style_font_size_default_multiplied } from "./html_style_font_size_default_multiplied.mjs";
import { html_style_centered } from "./html_style_centered.mjs";
import { html_spacer_vertical_n } from "./html_spacer_vertical_n.mjs";
import { html_style_font_color_white } from "./html_style_font_color_white.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function html_loader() {
  let overlay = html_overlay(fn_name("html_loader"));
  let label = html_p_text(overlay, "Loading...");
  html_style_font_color_white(label);
  html_spacer_vertical_n(label, 10);
  html_style_centered(label);
  html_style_font_size_default_multiplied(label, 2);
  return overlay;
}
