import { game_tile_units_css } from "./game_tile_units_css.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_filter } from "./html_style_filter.mjs";
import { app_gs_npc_icon_generic } from "./app_gs_npc_icon_generic.mjs";
export function app_gs_npc_icon_christian(c_blur, c) {
  app_gs_npc_icon_generic(
    c_blur,
    c,
    "icons/cross.svg",
    "invert(69%) sepia(83%) saturate(322%) hue-rotate(47deg) brightness(109%) contrast(105%)",
  );
  html_style_filter(
    c_blur,
    string_combine_multiple(["blur(", game_tile_units_css(1 / 46), ")"]),
  );
}
