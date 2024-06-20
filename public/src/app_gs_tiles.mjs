import { app_gs_z_index } from "./app_gs_z_index.mjs";
import { game_img_base } from "./game_img_base.mjs";
import { game_img } from "./game_img.mjs";
export function app_gs_tiles() {
  game_img(
    map_c,
    game_img_base(0),
    {
      x: 0,
      y: 0,
    },
    app_gs_z_index("tile"),
  );
}
