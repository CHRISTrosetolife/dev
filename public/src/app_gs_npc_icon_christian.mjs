import { html_style } from "./html_style.mjs";
import { html_img_src } from "./html_img_src.mjs";
export function app_gs_npc_icon_christian(c) {
  html_img_src(c, "icons/question.svg");
  html_style(c, {
    filter:
      "invert(11%) sepia(100%) saturate(5663%) hue-rotate(239deg) brightness(105%) contrast(113%)",
  });
}
