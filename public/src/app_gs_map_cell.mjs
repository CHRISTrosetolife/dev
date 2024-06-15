import { app_gs_overlays_at } from "./app_gs_overlays_at.mjs";
import { app_gs_walk } from "./app_gs_walk.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { game_img_style } from "./game_img_style.mjs";
import { list_random_index_weighted } from "./list_random_index_weighted.mjs";
import { game_grass_weight } from "./game_grass_weight.mjs";
import { list_index } from "./list_index.mjs";
import { game_img_base } from "./game_img_base.mjs";
import { game_img } from "./game_img.mjs";
import { html_data_set } from "./html_data_set.mjs";
import { html_div } from "./html_div.mjs";
import { app_gs_z_indexes } from "./app_gs_z_indexes.mjs";
import { log } from "./log.mjs";
export function app_gs_map_cell(map, map_c, player_overlay, r, c) {
  let z_indexes = app_gs_z_indexes();
  let clicker = html_div(map_c);
  app_gs_overlays_at(map, r, c, lambda_overlay);
  let grass = game_grass_weight();
  let index = list_random_index_weighted(grass);
  game_img(map_c, game_img_base(index), r, c, list_index(z_indexes, "tile"));
  game_img_style(clicker, r, c, list_index(z_indexes, "clicker"));
  html_on_click(clicker, async () => {
    app_gs_overlays_at(map, r, c, () => {
      let id = o;
      log({
        id,
      });
    });
    let direction = null;
    if (r === map.player.y) {
      if (c > map.player.x) {
        direction = "right";
      }
      if (c < map.player.x) {
        direction = "left";
      }
    }
    if (c === map.player.x) {
      if (r > map.player.y) {
        direction = "down";
      }
      if (r < map.player.y) {
        direction = "up";
      }
    }
    if (direction !== null) {
      await app_gs_walk(player_overlay, map.player, direction, r, c);
    }
  });
  function lambda_overlay(o) {
    let { id } = o;
    html_data_set(clicker, "overlay", id);
    game_img(map_c, game_img_base(id), r, c, list_index(z_indexes, "overlay"));
  }
}
