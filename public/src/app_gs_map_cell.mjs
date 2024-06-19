import { app_gs_screen_size } from "./app_gs_screen_size.mjs";
import { subtract } from "./subtract.mjs";
import { game_img_position } from "./game_img_position.mjs";
import { html_style } from "./html_style.mjs";
import { html_style_height } from "./html_style_height.mjs";
import { game_tile_units_css } from "./game_tile_units_css.mjs";
import { html_style_width } from "./html_style_width.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { list_xy } from "./list_xy.mjs";
import { list_all } from "./list_all.mjs";
import { app_gs_map_tile_id } from "./app_gs_map_tile_id.mjs";
import { app_gs_map_neighbors_get } from "./app_gs_map_neighbors_get.mjs";
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
import { object_property_get } from "./object_property_get.mjs";
import { equal_by } from "./equal_by.mjs";
import { html_style_background_color } from "./html_style_background_color.mjs";
import { html_remove } from "./html_remove.mjs";
export function app_gs_map_cell(map, map_c, player_c, tile) {
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
      app_gs_map_tile_id,
      (v) => {
        return app_gs_map_neighbors_get(map, v);
      },
      from,
      tile,
    );
    if (
      list_all(list_xy(), (xy) =>
        equal_by(map.player, tile, (coordinates) =>
          object_property_get(coordinates, xy),
        ),
      )
    ) {
      let menu = html_div(map_c);
      html_style(menu, {
        padding: game_tile_units_css(0.25),
      });
      html_style_background_color(menu, "rgba(1,1,1,0.5)");
      let { x_count, y_count } = app_gs_screen_size();
      html_style_width(menu, game_tile_units_css(x_count));
      html_style_height(menu, game_tile_units_css(y_count));
      html_style(menu, {
        position: "absolute",
        "z-index": list_index(z_indexes, "menu"),
      });
      game_img_position(
        menu,
        subtract(map.player.y, (y_count - 1) / 2),
        subtract(map.player.x, (x_count - 1) / 2),
      );
      html_button_width_full_text_click(menu, "close menu", () => {
        html_remove(menu);
      });
      return;
    }
    app_gs_map_render(map, map_c, path, player_c);
    await each_async(list_skip(path, 1), async (tile) => {
      await app_gs_walk(player_c, map.player, tile);
    });
    html_scroll_center_smooth(player_c);
  });
  return list_concat([tile_c], overlays);
}
