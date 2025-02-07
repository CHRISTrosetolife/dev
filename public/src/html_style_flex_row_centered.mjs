import { html_style } from "./html_style.mjs";
export function html_style_flex_row_centered(row) {
  html_style(row, {
    display: "flex",
    "flex-direction": "row",
    "align-items": "center",
  });
}
