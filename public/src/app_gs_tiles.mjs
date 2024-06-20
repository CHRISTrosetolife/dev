import { html_style } from "./html_style.mjs";
import { html_div } from "./html_div.mjs";
import { html_br } from "./html_br.mjs";
import { html_img } from "./html_img.mjs";
import { each_range } from "./each_range.mjs";
import { game_img_base } from "./game_img_base.mjs";
export function app_gs_tiles(root) {
  let container = html_div(root);
  html_style(container, {
    "line-height": 0,
  });
  let columns = 8;
  each_range(1063, (i) => {
    if (i > 0 && i % columns === 0) {
      let br = html_br(container);
      if (0) {
        html_style(br, {
          "line-height": 0,
        });
      }
    }
    let image = html_img(container, game_img_base(i));
  });
}
