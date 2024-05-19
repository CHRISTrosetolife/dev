import { integer_parse } from "./integer_parse.mjs";
import { html_hash } from "./html_hash.mjs";
import { html_style_alternate_monospace_short_multiple } from "./html_style_alternate_monospace_short_multiple.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { html_img_limited_centered } from "./html_img_limited_centered.mjs";
import { html_buttons_next_previous } from "./html_buttons_next_previous.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { list_get } from "./list_get.mjs";
import { list_index_last } from "./list_index_last.mjs";
export function app_demo_2024_05_19() {
  let root = html_style_default_initialize();
  let screen = 0;
  html_hash({
    screen: (value) => {
      screen = integer_parse(value);
    },
  });
  let screens = [
    (parent) => {
      html_style_alternate_monospace_short(
        parent,
        "`string_combine` is a function that concatenates two strings",
      );
      html_img_limited_centered(parent, "demo\\2024_05_19\\1.png");
      html_style_alternate_monospace_short_multiple(parent, [
        "any function can be ran from the command line using `run.mjs`",
        "just pass in any arguments like `hello` and `' world'` like this:",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\2.png");
      html_style_alternate_monospace_short_multiple(parent, [
        "this speeds up developing a new function",
      ]);
    },
    (parent) => {
      html_style_alternate_monospace_short_multiple(parent, [
        "`noop` is a function that does nothing and has no arguments",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\3.png");
      html_style_alternate_monospace_short_multiple(parent, [
        "suppose we make a change to `noop` :",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\4.png");
      html_style_alternate_monospace_short_multiple(parent, [
        "then , if we change `run.mjs` to `run_git.mjs` ...",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\5.png");
    },
  ];
  let screen_last = list_index_last(screens);
  refresh_lesson_screen(screen);
  async function refresh_lesson_screen(screen) {
    html_clear_scroll_top(root);
    list_get(screens, screen)(root);
    html_buttons_next_previous(
      root,
      refresh_lesson_screen,
      screen,
      screen_last,
    );
  }
}
