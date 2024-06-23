import { html_style } from "./html_style.mjs";
import { html_img_src } from "./html_img_src.mjs";
export function app_gs_npc_icon_wait(c) {
  html_img_src(c, "icons/cross.svg");
  html_style(c, {
    filter:
      "invert(80%) sepia(52%) saturate(474%) hue-rotate(48deg) brightness(103%) contrast(102%)",
  });
}
