import { game_tile_units_css } from "./game_tile_units_css.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_filter } from "./html_style_filter.mjs";
export function app_gs_npc_icon_blur(c_blur, light) {
  html_style_filter(
    c_blur,
    string_combine_multiple([
      light ? "invert(100%) " : "",
      "blur(",
      game_tile_units_css(1 / 46),
      ")",
    ]),
  );
}
