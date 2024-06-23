import { html_style } from "./html_style.mjs";
import { html_img_src } from "./html_img_src.mjs";
export function app_gs_npc_icon_wait(c) {
  html_img_src(c, "icons/x.svg");
  html_style(c, {
    filter:
      "invert(33%) sepia(69%) saturate(6226%) hue-rotate(349deg) brightness(101%) contrast(113%)",
  });
}
