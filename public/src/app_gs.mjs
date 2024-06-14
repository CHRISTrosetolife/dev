import { each_index } from "./each_index.mjs";
import { each } from "./each.mjs";
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
import { list_adder } from "./list_adder.mjs";
import { integer_random } from "./integer_random.mjs";
export function app_gs() {
  let root = html_style_default_initialize();
  html_style(root, {
    margin: 0,
  });
  html_style_background_color(root, "black");
  let rows = 20;
  let columns = 20;
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
  let grass = [10, 1, 1, 1];
  let sum = 0;
  let sums = list_adder((la) =>
    each(grass, (proportion) => {
      sum += proportion;
      la(sum);
    }),
  );
  each_range(rows, (r) => {
    let row = html_div(map);
    html_style_height(row, tile_units_css(1));
    each_range(columns, (c) => {
      let r = integer_random(1, sum);
      let found = null;
      each_index(sums, (s, index) => {
        if (found === null) {
          if (s >= r) {
            found = s;
          }
        }
      });
      let image = html_img(row, game_img_base(r));
      html_style_width(image, tile_units_css(1));
    });
  });
}
