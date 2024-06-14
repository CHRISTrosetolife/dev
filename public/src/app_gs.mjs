import { html_table } from "./html_table.mjs";
import { html_style_width } from "./html_style_width.mjs";
import { game_img_base } from "./game_img_base.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_img } from "./html_img.mjs";
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
  let map = html_div(root);
  let rows = 10;
  let columns = 10;
  let table = html_table(parent);
  each_range(30, (index) => {
    let image = html_img(map, game_img_base(index));
    html_style_width(image, "min(10dvw,10dvh)");
  });
}
