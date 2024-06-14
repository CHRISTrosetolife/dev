import { game_img_base } from "./game_img_base.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_img } from "./html_img.mjs";
import { each_range } from "./each_range.mjs";
import { html_style } from "./html_style.mjs";
export function app_gs() {
  let root = html_style_default_initialize();
  html_style(root,{'padding':0})
  each_range(30, (i) => html_img(root, game_img_base(i)));
}
