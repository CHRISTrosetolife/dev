import { html_style } from "./html_style.mjs";
export function html_scrollable_hide(map_c) {
  html_style(map_c, {
    overflow: "scroll",
    "scrollbar-width": "none",
    "-ms-overflow-style": "none",
  });
}
