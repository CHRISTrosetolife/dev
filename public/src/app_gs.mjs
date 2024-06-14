import { game_img_style } from "./game_img_style.mjs";
import { log } from "./log.mjs";
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
export function app_gs() {
  let root = html_style_default_initialize();
  html_style(root, {
    margin: 0,
  });
  html_style_background_color(root, "black");
  let rows = 10;
  let columns = 10;
  let row_middle = floor(divide(subtract_1(rows), 2));
  let column_middle = floor(divide(subtract_1(columns), 2));
  let map = html_div(root);
  html_style_width(map, game_tile_units_css(columns));
  let height = game_tile_units_css(rows);
  html_style_height(map, height);
  html_style(map, {
    overflow: "hidden",
    position: "relative",
    display: "inline",
    "z-index": 0,
  });
  each_range(rows, (r) => {
    html_style_height(map, game_tile_units_css(1));
    each_range(columns, (c) => {
      let grass = game_grass_weight();
      let index = list_random_index_weighted(grass);
      let tile = game_img(map, game_img_base(index), r, c, 0);
      let clicker = html_div(map);
      game_img_style(image, r, c, z_index);
      html_on_click(tile, () => log("here"));
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
          1,
        );
      }
    });
  });
  game_img(
    map,
    game_img_character(list_random_item(game_img_list_male()), 0),
    row_middle,
    column_middle,
    2,
  );
}
