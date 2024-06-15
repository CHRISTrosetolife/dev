import { list_all } from "./list_all.mjs";
import { app_gs_at_single } from "./app_gs_at_single.mjs";
import { graph_path_shortest } from "./graph_path_shortest.mjs";
import { app_gs_overlays_any_wall } from "./app_gs_overlays_any_wall.mjs";
import { app_gs_adjacent } from "./app_gs_adjacent.mjs";
import { log } from "./log.mjs";
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
export function app_gs_map_cell(map, map_c, player_overlay, tile) {
  let z_indexes = app_gs_z_indexes();
  let clicker = html_div(map_c);
  app_gs_overlays_at(map, tile, lambda_overlay);
  let grass = game_grass_weight();
  let index = list_random_index_weighted(grass);
  game_img(map_c, game_img_base(index), tile, list_index(z_indexes, "tile"));
  game_img_style(clicker, tile.y, tile.x, list_index(z_indexes, "clicker"));
  html_on_click(clicker, async () => {
    let w = app_gs_overlays_any_wall(map, tile);
    if (w) {
      log("wall");
      return;
    }
    if (0) {
      list_all([a, b], (ab) => !app_gs_overlays_any_wall(map, ab));
    }
    let from = app_gs_at_single(map.tiles, map.player);
    let p = graph_path_shortest(
      map.tiles,
      (a, b) => app_gs_adjacent(a, b),
      from,
      tile,
    );
    log({
      p,
    });
    let direction = null;
    if (tile.y === map.player.y) {
      if (tile.x > map.player.x) {
        direction = "right";
      }
      if (tile.x < map.player.x) {
        direction = "left";
      }
    }
    if (tile.x === map.player.x) {
      if (tile.y > map.player.y) {
        direction = "down";
      }
      if (tile.y < map.player.y) {
        direction = "up";
      }
    }
    if (direction !== null) {
      await app_gs_walk(player_overlay, map.player, direction, tile.y, tile.x);
    }
  });
  function lambda_overlay(o) {
    let { id } = o;
    html_data_set(clicker, "overlay", id);
    game_img(map_c, game_img_base(id), tile, list_index(z_indexes, "overlay"));
  }
}
