import { app_gs_walk } from "./app_gs_walk.mjs";
import { game_character_index } from "./game_character_index.mjs";
import { game_character_indices } from "./game_character_indices.mjs";
import { app_gs_map_new } from "./app_gs_map_new.mjs";
import { html_data_set } from "./html_data_set.mjs";
import { html_scroll_center_smooth } from "./html_scroll_center_smooth.mjs";
import { each } from "./each.mjs";
import { list_index } from "./list_index.mjs";
import { game_img_style } from "./game_img_style.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { game_img } from "./game_img.mjs";
import { divide } from "./divide.mjs";
import { floor } from "./floor.mjs";
import { game_img_list_male } from "./game_img_list_male.mjs";
import { game_img_character } from "./game_img_character.mjs";
import { game_tile_units_css } from "./game_tile_units_css.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { game_grass_weight } from "./game_grass_weight.mjs";
import { list_random_index_weighted } from "./list_random_index_weighted.mjs";
import { html_style_height } from "./html_style_height.mjs";
import { html_style_width } from "./html_style_width.mjs";
import { game_img_base } from "./game_img_base.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { each_range } from "./each_range.mjs";
import { html_style } from "./html_style.mjs";
import { html_style_background_color } from "./html_style_background_color.mjs";
import { html_div } from "./html_div.mjs";
export function app_gs() {
  let root = html_style_default_initialize();
  html_style(root, {
    margin: 0,
  });
  html_style_background_color(root, "black");
  let map = app_gs_map_new();
  let player = {};
  player.y = floor(divide(subtract_1(map.rows), 2));
  player.x = floor(divide(subtract_1(map.columns), 2));
  player.walk_offset = 0;
  player.walk_previous = 1;
  let character_indices = game_character_indices();
  let map_c = html_div(root);
  html_style_width(map_c, game_tile_units_css(map.columns));
  html_style_height(map_c, game_tile_units_css(map.rows));
  html_style(map_c, {
    overflow: "hidden",
    position: "relative",
    display: "inline",
  });
  let z_indexes = ["tile", "overlay", "player", "clicker"];
  player.character = list_random_item(game_img_list_male());
  let player_overlay = game_img(
    map_c,
    game_img_character(player.character, game_character_index("down")),
    player.y,
    player.x,
    list_index(z_indexes, "player"),
  );
  each_range(map.rows, (r) => {
    html_style_height(map_c, game_tile_units_css(1));
    each_range(map.columns, (c) => {
      let clicker = html_div(map_c);
      each(map.overlays, (o) => {
        let { id, x, y } = o;
        if (x !== c) {
          return;
        }
        if (y !== r) {
          return;
        }
        html_data_set(clicker, "overlay", id);
        game_img(
          map_c,
          game_img_base(id),
          r,
          c,
          list_index(z_indexes, "overlay"),
        );
      });
      let grass = game_grass_weight();
      let index = list_random_index_weighted(grass);
      game_img(
        map_c,
        game_img_base(index),
        r,
        c,
        list_index(z_indexes, "tile"),
      );
      game_img_style(clicker, r, c, list_index(z_indexes, "clicker"));
      html_on_click(clicker, async () => {
        let direction = null;
        if (r === player.y) {
          if (c > player.x) {
            direction = "right";
          }
          if (c < player.x) {
            direction = "left";
          }
        }
        if (c === player.x) {
          if (r > player.y) {
            direction = "down";
          }
          if (r < player.y) {
            direction = "up";
          }
        }
        if (direction !== null) {
          await app_gs_walk(player_overlay, player, direction, r, c);
        }
      });
    });
  });
  html_scroll_center_smooth(player_overlay);
}
