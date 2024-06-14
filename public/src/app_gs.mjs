import { html_style_width } from "./html_style_width.mjs";
import { game_img_base } from "./game_img_base.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_img } from "./html_img.mjs";
import { each_range } from "./each_range.mjs";
import { html_style } from "./html_style.mjs";
import { html_style_background_color } from "./html_style_background_color.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_width_full } from "./html_style_width_full.mjs";
export function app_gs() {
  let root = html_style_default_initialize();
  html_style(root, {
    margin: 0,
  });
  html_style(root, {
    overflow: "hidden",
  });
  html_style_background_color(root, "black");
  let rows = 20;
  let columns = 20;
  let map = html_div(root);
  html_style_width_full(map);
  html_style(map, {
    overflow: "hidden",
  });
  each_range(rows, (r) => {
    let row = html_div(map);
    each_range(columns, (c) => {
      let image = html_img(row, game_img_base(r));
      html_style_width(image, "min(10dvw,10dvh)");
    });
  });
}
