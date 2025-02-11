import { html_style_background_color_transparent } from "./html_style_background_color_transparent.mjs";
import { html_style_background_color_yellow } from "./html_style_background_color_yellow.mjs";
export function html_style_background_color_select(row_selected, row) {
  if (row_selected !== null) {
    html_style_background_color_transparent(row_selected);
  }
  row_selected = row;
  html_style_background_color_yellow(row_selected);
  return row_selected;
}
