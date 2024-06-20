import { html_p_text } from "./html_p_text.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { app_gs_tiles } from "./app_gs_tiles.mjs";
import { html_style } from "./html_style.mjs";
import { html_style_width_full } from "./html_style_width_full.mjs";
import { html_style_centered } from "./html_style_centered.mjs";
import { html_div } from "./html_div.mjs";
export function app_sandbox() {
  let root = html_document_body();
  html_style(root, {
    "-webkit-box-align": "center",
    "-webkit-box-pack": "center",
    display: "-webkit-box",
  });
  let container_outer = html_div(root);
  html_style_centered(container_outer);
  html_style_width_full(container_outer);
  html_p_text(container_outer, "test");
  let container_inner = html_div(root);
  html_style(container_inner, {
    position: "relative",
  });
  app_gs_tiles(container_inner);
}
