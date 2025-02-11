import { html_style_background_color } from "./html_style_background_color.mjs";
import { html_style_background_color_yellow } from "./html_style_background_color_yellow.mjs";
export function html_style_background_color_select(row_selected, row) {
  if (row_selected !== null) {
    html_style_background_color(row_selected, "none");
  }
  row_selected = row;
  html_style_background_color_yellow(row_selected);
  return row_selected;
}
