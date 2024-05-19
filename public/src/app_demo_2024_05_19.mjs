import { html_style_alternate_monospace_short_multiple } from "./html_style_alternate_monospace_short_multiple.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { html_img_limited_centered } from "./html_img_limited_centered.mjs";
import { html_buttons_next_previous } from "./html_buttons_next_previous.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { list_get } from "./list_get.mjs";
export function app_demo_2024_05_19() {
  let root = html_style_default_initialize();
  let index = 0;
  let index_last = 0;
  let screens = [
    (parent) => {
      html_style_alternate_monospace_short;
      ("`string_combine` is a function that concatenate two strings");
      html_img_limited_centered(parent, "demo\\2024_05_19\\1.png");
      html_style_alternate_monospace_short_multiple;
      ("any function can be ran from the command line using `run.mjs`");
      ("just pass in any arguments like `hello` and `' world` like this:");
      ("this speeds up developing a new function");
      html_img_limited_centered(parent, "demo\\2024_05_19\\2.png");
    },
  ];
  refresh_lesson_screen(index);
  async function refresh_lesson_screen(index) {
    html_clear_scroll_top(root);
    list_get(screens, 0)(root);
    html_buttons_next_previous(root, refresh_lesson_screen, index, index_last);
  }
}
