import { html_style } from "./html_style.mjs";
export function html_select_none(word_component) {
  html_style(word_component, {
    "user-select": "none",
    "-moz-user-select": "none",
    "-webkit-user-select": "none",
    "-ms-user-select": "none",
  });
}
