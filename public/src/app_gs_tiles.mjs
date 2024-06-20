import { html_element } from "./html_element.mjs";
import { html_img } from "./html_img.mjs";
import { each_range } from "./each_range.mjs";
import { game_img_base } from "./game_img_base.mjs";
export function app_gs_tiles(root) {
  let columns = 8;
  each_range(1063, (i) => {
    if (i > 0 && i % columns === 0) {
      html_element(root, "br");
    }
    let image = html_img(root, game_img_base(i));
  });
}
