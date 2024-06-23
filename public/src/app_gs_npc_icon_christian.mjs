import { html_style } from "./html_style.mjs";
import { html_img_src } from "./html_img_src.mjs";
export function app_gs_npc_icon_christian(c) {
  html_img_src(c, "icons/cross.svg");
  html_style(c, {
    filter:
      "invert(77%) sepia(91%) saturate(2218%) hue-rotate(53deg) brightness(105%) contrast(102%)",
  });
}
