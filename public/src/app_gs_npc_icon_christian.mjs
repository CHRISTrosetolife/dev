import { game_tile_units_css } from "./game_tile_units_css.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_filter } from "./html_style_filter.mjs";
import { app_gs_npc_icon_generic } from "./app_gs_npc_icon_generic.mjs";
export function app_gs_npc_icon_christian(c_blur, c) {
  app_gs_npc_icon_generic(
    c_blur,
    c,
    "icons/cross.svg",
    "invert(80%) sepia(52%) saturate(474%) hue-rotate(48deg) brightness(103%) contrast(102%)",
  );
  html_style_filter(
    c_blur,
    string_combine_multiple([
      "invert(100%) sepia(100%) saturate(1%) hue-rotate(144deg) brightness(102%) contrast(101%) blur(",
      game_tile_units_css(1 / 46),
      ")",
    ]),
  );
}
