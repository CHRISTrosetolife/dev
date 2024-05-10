import { html_img } from "./html_img.mjs";
import { html_style } from "./html_style.mjs";
export function html_img_width_full(parent, img_name) {
  let i1 = html_img(parent, img_name);
  html_style(i1, {
    width: "100%",
  });
}
