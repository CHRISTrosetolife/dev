import { graph_path_shortest_neighbors } from "./graph_path_shortest_neighbors.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { app_gs_map_render } from "./app_gs_map_render.mjs";
import { html_scroll_center_smooth } from "./html_scroll_center_smooth.mjs";
import { each_async } from "./each_async.mjs";
import { app_gs_at_single } from "./app_gs_at_single.mjs";
import { app_gs_overlays_any_wall } from "./app_gs_overlays_any_wall.mjs";
import { app_gs_walk } from "./app_gs_walk.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { game_img_style } from "./game_img_style.mjs";
import { list_index } from "./list_index.mjs";
import { game_img_base } from "./game_img_base.mjs";
import { game_img } from "./game_img.mjs";
import { html_data_set } from "./html_data_set.mjs";
import { html_div } from "./html_div.mjs";
import { app_gs_z_indexes } from "./app_gs_z_indexes.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function app_gs_map_cell(map, map_c, player_overlay, tile) {
  let z_indexes = app_gs_z_indexes();
  let clicker = html_div(map_c);
  let overlays = list_adder((la) =>
    each(tile.overlays, function lambda_overlay(o) {
      let { id: o_id } = o;
      html_data_set(clicker, "overlay", o_id);
      let i = game_img(
        map_c,
        game_img_base(o_id),
        tile,
        list_index(z_indexes, "overlay"),
      );
      la(i);
    }),
  );
  let { id } = tile;
  let tile_c = game_img(
    map_c,
    game_img_base(id),
    tile,
    list_index(z_indexes, "tile"),
  );
  game_img_style(clicker, tile.y, tile.x, list_index(z_indexes, "clicker"));
  html_on_click(clicker, async () => {
    let w = app_gs_overlays_any_wall(tile);
    if (w) {
      return;
    }
    let from = app_gs_at_single(map.tiles, map.player);
    let path = graph_path_shortest_neighbors(
      list_concat_multiple(map.tiles),
      (v) => {
        let { x, y } = v;
        let north = map.tiles[y - 1];
      },
      from,
      tile,
    );
    app_gs_map_render(map, map_c, path, player_overlay);
    await each_async(list_skip(path, 1), async (tile) => {
      await app_gs_walk(map, map_c, player_overlay, map.player, tile);
    });
    html_scroll_center_smooth(player_overlay);
  });
  return list_concat([tile_c], overlays);
}
