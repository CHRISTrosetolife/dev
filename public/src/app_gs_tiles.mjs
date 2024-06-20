import { log } from "./log.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { app_gs_menu_overlay } from "./app_gs_menu_overlay.mjs";
import { html_style_background_color } from "./html_style_background_color.mjs";
import { html_style_line_height_none } from "./html_style_line_height_none.mjs";
import { html_div } from "./html_div.mjs";
import { html_br } from "./html_br.mjs";
import { html_img } from "./html_img.mjs";
import { each_range } from "./each_range.mjs";
import { game_img_base } from "./game_img_base.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_remove } from "./html_remove.mjs";
export function app_gs_tiles(parent, map_c, map) {
  let container = html_div(parent);
  html_style_line_height_none(container);
  let columns = 8;
  each_range(1063, (i) => {
    if (i > 0 && i % columns === 0) {
      html_br(container);
    }
    let image = html_img(container, game_img_base(i));
    html_style_background_color(image, "black");
    html_on_click(image, () => {
      log("here");
      let menu2 = app_gs_menu_overlay(map_c, map);
      html_button_width_full_text_click(menu2, "back", () => {
        html_remove(menu2);
      });
    });
  });
}
