import { app_gs_npc_icon_blur } from "./app_gs_npc_icon_blur.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_gs_npc_icon_generic } from "./app_gs_npc_icon_generic.mjs";
export function app_gs_npc_icon_unconverted(c_blur, c) {
  let icon_name = "exclaim";
  app_gs_npc_icon_generic(
    c_blur,
    c,
    string_combine_multiple(["icons/", icon_name, ".svg"]),
    "invert(99%) sepia(98%) saturate(7493%) hue-rotate(12deg) brightness(118%) contrast(106%)",
  );
  app_gs_npc_icon_blur(c_blur, false);
}
