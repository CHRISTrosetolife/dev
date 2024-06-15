import { html_style_background_color } from "./html_style_background_color.mjs";
import { html_style } from "./html_style.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_gs_style_default_initialize() {
  let root = html_style_default_initialize();
  html_style(root, {
    margin: 0,
  });
  html_style_background_color(root, "black");
  return root;
}
