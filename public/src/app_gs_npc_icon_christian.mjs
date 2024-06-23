import { html_style } from "./html_style.mjs";
import { html_img_src } from "./html_img_src.mjs";
export function app_gs_npc_icon_christian(c) {
  html_img_src(c, "icons/cross.svg");
  html_style(c, {
    filter:
      "invert(65%) sepia(45%) saturate(7441%) hue-rotate(77deg) brightness(101%) contrast(102%)",
  });
}
