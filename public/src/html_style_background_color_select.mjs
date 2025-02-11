import { html_style_background_color_transparent } from "./html_style_background_color_transparent.mjs";
import { html_style_background_color_yellow } from "./html_style_background_color_yellow.mjs";
export function html_style_background_color_select(selected, selection_new) {
  if (selected !== null) {
    html_style_background_color_transparent(selected);
  }
  selected = selection_new;
  if (false) {
    html_style_background_color_yellow(selected);
  }
  return selected;
}
