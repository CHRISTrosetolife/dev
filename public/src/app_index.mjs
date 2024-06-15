import { window_open } from "./window_open.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_index() {
  let root = html_style_default_initialize();
  html_button_width_full_text_click(root, "game", () => {
    window_open();
  });
}
