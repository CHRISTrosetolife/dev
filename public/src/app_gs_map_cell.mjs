import { abs } from "./abs.mjs";
import { log } from "./log.mjs";
import { app_gs_overlays_wall } from "./app_gs_overlays_wall.mjs";
import { list_any } from "./list_any.mjs";
import { list_adder } from "./list_adder.mjs";
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
import { list_includes } from "./list_includes.mjs";
export function app_gs_map_cell(map, map_c, player_overlay, tile) {
  let z_indexes = app_gs_z_indexes();
  let clicker = html_div(map_c);
  app_gs_overlays_at(map, tile.y, tile.x, lambda_overlay);
  let grass = game_grass_weight();
  let index = list_random_index_weighted(grass);
  game_img(map_c, game_img_base(index), tile, list_index(z_indexes, "tile"));
  game_img_style(clicker, tile.y, tile.x, list_index(z_indexes, "clicker"));
  html_on_click(clicker, async () => {
    let os = list_adder((la) => app_gs_overlays_at(map, tile.y, tile.x, la));
    if (list_any(os, (o) => list_includes(app_gs_overlays_wall(), o.id))) {
      log("wall");
      return;
    }
    graph_path_shortest(
      map.tiles,
      (a, b) => abs(a.y - b.y) == 1 && a.y - b.y === 0,
    );
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
