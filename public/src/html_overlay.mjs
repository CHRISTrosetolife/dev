import { html_style_background_color_transparent } from "./html_style_background_color_transparent.mjs";
import { html_style } from "./html_style.mjs";
import { html_style_height_full } from "./html_style_height_full.mjs";
import { html_style_width_full } from "./html_style_width_full.mjs";
import { html_div } from "./html_div.mjs";
import { html_document_body } from "./html_document_body.mjs";
export function html_overlay() {
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
  return overlay;
}
