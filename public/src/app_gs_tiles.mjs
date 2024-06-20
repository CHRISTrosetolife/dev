import { list_index } from "./list_index.mjs";
import { game_img_base } from "./game_img_base.mjs";
import { game_img } from "./game_img.mjs";
export function app_gs_tiles() {
  let tile_c = game_img(
    map_c,
    game_img_base(id),
    tile,
    list_index(z_indexes, "tile"),
  );
}
