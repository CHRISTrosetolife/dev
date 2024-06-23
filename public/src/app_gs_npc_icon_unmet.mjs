import { app_gs_npc_icon_blur } from "./app_gs_npc_icon_blur.mjs";
import { app_gs_npc_icon_generic } from "./app_gs_npc_icon_generic.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function app_gs_npc_icon_unmet(c_blur, c) {
  assert_arguments_length(arguments, 2);
  let img_url = "icons/question.svg";
  let filter =
    "invert(11%) sepia(100%) saturate(5663%) hue-rotate(239deg) brightness(105%) contrast(113%)";
  app_gs_npc_icon_generic(c_blur, c, img_url, filter);
  app_gs_npc_icon_blur(c_blur, true);
}
