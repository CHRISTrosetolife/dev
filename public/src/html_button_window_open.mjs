import { window_open } from "./window_open.mjs";
import { html_button } from "./html_button.mjs";
export function html_button_window_open(root, url, text) {
  html_button(root, text, function () {
    window_open(url);
  });
}
