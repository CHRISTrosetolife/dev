import { html_style } from "./html_style.mjs";
import { html_img_src } from "./html_img_src.mjs";
export function app_gs_npc_icon_christian(c) {
  html_img_src(c, "icons/cross.svg");
  html_style(c, {
    filter:
      "invert(68%) sepia(95%) saturate(316%) hue-rotate(59deg) brightness(106%) contrast(102%)",
  });
}
