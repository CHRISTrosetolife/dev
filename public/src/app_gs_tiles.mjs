import { floor } from "./floor.mjs";
import { each_range } from "./each_range.mjs";
import { game_img_base } from "./game_img_base.mjs";
import { game_img } from "./game_img.mjs";
export function app_gs_tiles(root) {
  let columns = 8;
  each_range(1063, (i) => {
    game_img(
      root,
      game_img_base(i),
      {
        x: i % columns,
        y: floor(i / columns),
      },
      "tile",
    );
  });
}
