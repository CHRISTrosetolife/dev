import { game_grass_weight } from "./game_grass_weight.mjs";
import { list_random_index_weighted } from "./list_random_index_weighted.mjs";
import { html_style_height } from "./html_style_height.mjs";
import { html_style_width } from "./html_style_width.mjs";
import { game_img_base } from "./game_img_base.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_img } from "./html_img.mjs";
import { each_range } from "./each_range.mjs";
import { html_style } from "./html_style.mjs";
import { html_style_background_color } from "./html_style_background_color.mjs";
import { html_div } from "./html_div.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_gs() {
  let root = html_style_default_initialize();
  html_style(root, {
    margin: 0,
  });
  html_style_background_color(root, "black");
  let rows = 200;
  let columns = 8;
  let tiles_min = 10;
  let map = html_div(root);
  html_style_width(map, tile_units_css(columns));
  let height = tile_units_css(rows);
  html_style_height(map, height);
  function tile_units_css(count) {
    let v = (100 / tiles_min) * count;
    return string_combine_multiple(["min(", v, "dvw,", v, "dvh)"]);
  }
  html_style(map, {
    overflow: "hidden",
  });
  each_range(rows, (r) => {
    let row = html_div(map);
    html_style_height(row, tile_units_css(1));
    each_range(columns, (c) => {
      let grass = game_grass_weight();
      let index = list_random_index_weighted(grass);
      let column = html_div(row);
      html_style(column, {
        position: "relative",
        display: "inline",
      });
      let image = html_img(column, game_img_base(r * columns + c));
      html_style_width(image, tile_units_css(1));
    });
  });
}
