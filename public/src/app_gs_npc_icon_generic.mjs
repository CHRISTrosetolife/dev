import { html_style_filter } from "./html_style_filter.mjs";
import { html_img_src } from "./html_img_src.mjs";
import { each } from "./each.mjs";
export function app_gs_npc_icon_generic(c_blur, c, img_url, filter) {
  each([c_blur, c], (item) => {
    html_img_src(item, img_url);
  });
  html_style_filter(c, filter);
}
