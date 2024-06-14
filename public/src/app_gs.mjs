import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_img } from "./html_img.mjs";
export function app_gs() {
  let root = html_style_default_initialize();
  html_img(root, "pipoya\\rpg_32\\sliced\\base_0.png");
  html_img(root, "pipoya\\rpg_32\\sliced\\base_1.png");
  html_img(root, "pipoya\\rpg_32\\sliced\\base_2.png");
}
