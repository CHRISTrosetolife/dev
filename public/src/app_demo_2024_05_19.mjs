import { html_buttons_next_previous } from "./html_buttons_next_previous.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_demo_2024_05_19() {
  html_style_default_initialize();
  let index = 0;
  async function refresh_lesson_screen(index) {
    html_clear_scroll_top(root);
    html_buttons_next_previous(root, refresh_lesson_screen, index, index_last);
  }
}
