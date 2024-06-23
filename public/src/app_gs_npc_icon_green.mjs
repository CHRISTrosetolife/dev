import { app_gs_npc_icon_blur } from "./app_gs_npc_icon_blur.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_gs_npc_icon_generic } from "./app_gs_npc_icon_generic.mjs";
export function app_gs_npc_icon_green(c_blur, c, icon_name) {
  app_gs_npc_icon_generic(
    c_blur,
    c,
    string_combine_multiple(["icons/", icon_name, ".svg"]),
    "invert(69%) sepia(83%) saturate(322%) hue-rotate(47deg) brightness(109%) contrast(105%)",
  );
  app_gs_npc_icon_blur(c_blur, false);
}
