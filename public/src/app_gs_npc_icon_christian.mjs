import { app_gs_npc_icon_blur } from "./app_gs_npc_icon_blur.mjs";
import { app_gs_npc_icon_generic } from "./app_gs_npc_icon_generic.mjs";
export function app_gs_npc_icon_christian(c_blur, c) {
  app_gs_npc_icon_generic(
    c_blur,
    c,
    "icons/cross.svg",
    "invert(69%) sepia(83%) saturate(322%) hue-rotate(47deg) brightness(109%) contrast(105%)",
  );
  app_gs_npc_icon_blur(c_blur, true);
}
