import { number_min } from "./number_min.mjs";
import { abs } from "./abs.mjs";
import { number_max } from "./number_max.mjs";
import { game_tiles_min } from "./game_tiles_min.mjs";
import { html_img_src_wait } from "./html_img_src_wait.mjs";
import { app_gs_sleep_time } from "./app_gs_sleep_time.mjs";
import { each_range_async } from "./each_range_async.mjs";
import { each } from "./each.mjs";
import { game_direction_to_delta } from "./game_direction_to_delta.mjs";
import { game_img_position } from "./game_img_position.mjs";
import { add } from "./add.mjs";
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
import { integer_random } from "./integer_random.mjs";
import { list_concat } from "./list_concat.mjs";
import { range_from } from "./range_from.mjs";
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
import { sleep } from "./sleep.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_gs() {
  let root = html_style_default_initialize();
  html_style(root, {
    margin: 0,
  });
  html_style_background_color(root, "black");
  let tiles_min = game_tiles_min();
  let rows = number_max(20, tiles_min * 2);
  let columns = rows;
  let player = {};
  player.y = floor(divide(subtract_1(rows), 2));
  player.x = floor(divide(subtract_1(columns), 2));
  player.walk_offset = 0;
  player.walk_previous = 1;
  let character_indices = {
    down: 1,
    left: 4,
    right: 7,
    up: 10,
  };
  let map = html_div(root);
  html_style_width(map, game_tile_units_css(columns));
  html_style_height(map, game_tile_units_css(rows));
  html_style(map, {
    overflow: "hidden",
    position: "relative",
    display: "inline",
  });
  let z_indexes = ["tile", "overlay", "player", "clicker"];
  player.character = list_random_item(game_img_list_male());
  let player_overlay = game_img(
    map,
    game_img_character(
      player.character,
      object_property_get(character_indices, "down"),
    ),
    player.y,
    player.x,
    list_index(z_indexes, "player"),
  );
  each_range(rows, (r) => {
    html_style_height(map, game_tile_units_css(1));
    each_range(columns, (c) => {
      let grass = game_grass_weight();
      let index = list_random_index_weighted(grass);
      game_img(map, game_img_base(index), r, c, list_index(z_indexes, "tile"));
      let clicker = html_div(map);
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
          let img_url = game_img_character(
            player.character,
            object_property_get(character_indices, direction),
          );
          await html_img_src_wait(player_overlay, img_url);
          let steps_count = abs(player.y - r) + abs(player.x - c);
          await each_range_async(steps_count, async () => {
            let animate_count = 2;
            let sleep_time = app_gs_sleep_time();
            await step(1);
            await sleep(sleep_time);
            await step(2);
            await sleep(sleep_time);
            let delta = game_direction_to_delta(direction);
            each(["x", "y"], (xy) => {
              let value =
                object_property_get(player, xy) +
                object_property_get(delta, xy);
              object_property_set(player, xy, value);
            });
            async function step(step_count) {
              if (player.walk_offset === 0) {
                player.walk_offset = -player.walk_previous;
                player.walk_previous = player.walk_offset;
              } else {
                player.walk_offset = 0;
              }
              await html_img_src_wait(
                player_overlay,
                game_img_character(
                  player.character,
                  add(
                    object_property_get(character_indices, direction),
                    player.walk_offset,
                  ),
                ),
              );
              let delta = game_direction_to_delta(direction);
              game_img_position(
                player_overlay,
                player.y + (delta.y / animate_count) * step_count,
                player.x + (delta.x / animate_count) * step_count,
              );
            }
          });
          let vh = window.innerHeight;
          let vw = window.innerWidth;
          let elTop = player_overlay.element.offsetTop;
          let tile_size = number_min(vh, vw) / tiles_min;
          let mh = tile_size * rows;
          let mw = tile_size * columns;
          window.scrollTo(
            player_overlay.element.offsetLeft - vw / 2,
            player_overlay.element.offsetTop - vh / 2,
          );
        }
      });
      if (integer_random(1, 8) === 1) {
        game_img(
          map,
          game_img_base(
            list_random_item(
              list_concat(range_from(40, 42), range_from(48, 57)),
            ),
          ),
          r,
          c,
          list_index(z_indexes, "overlay"),
        );
      }
    });
  });
}
