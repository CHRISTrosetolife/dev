import { game_tile_units_css } from "./game_tile_units_css.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_filter } from "./html_style_filter.mjs";
import { app_gs_npc_icon_generic } from "./app_gs_npc_icon_generic.mjs";
export function app_gs_npc_icon_christian(c_blur, c) {
  app_gs_npc_icon_generic(
    c_blur,
    c,
    "icons/cross.svg",
    "invert(80%) sepia(83%) saturate(439%) hue-rotate(36deg) brightness(97%) contrast(114%)",
  );
  html_style_filter(
    c_blur,
    string_combine_multiple(["blur(", game_tile_units_css(1 / 46), ")"]),
  );
}
