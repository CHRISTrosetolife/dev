import { app_gs_npc_icon_blur } from "./app_gs_npc_icon_blur.mjs";
import { app_gs_npc_icon_generic } from "./app_gs_npc_icon_generic.mjs";
export function app_gs_npc_icon_wait(c_blur, c) {
  app_gs_npc_icon_generic(
    c_blur,
    c,
    "icons/x.svg",
    "invert(33%) sepia(69%) saturate(6226%) hue-rotate(349deg) brightness(101%) contrast(113%)",
  );
  app_gs_npc_icon_blur(c_blur, true);
}
