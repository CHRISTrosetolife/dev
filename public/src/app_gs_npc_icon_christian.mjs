import { html_style } from "./html_style.mjs";
import { html_img_src } from "./html_img_src.mjs";
export function app_gs_npc_icon_christian(c) {
  html_img_src(c, "icons/cross.svg");
  html_style(c, {
    filter:
      "invert(26%) sepia(97%) saturate(1212%) hue-rotate(80deg) brightness(103%) contrast(101%)",
  });
}
