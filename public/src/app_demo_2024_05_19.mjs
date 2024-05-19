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
        "then , if we change `run.mjs` to `run<b>_git</b>.mjs` ...",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\5.png");
      html_style_alternate_monospace_short_multiple(parent, [
        "... first , the command is ran",
        "in this case the command is `noop`",
        "then , a local commit is made to git ( `git add` , `git commit -m ...` )",
        "therefore , anytime a command is ran git can be kept up-to-date",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\6.png");
      html_style_alternate_monospace_short_multiple(parent, [
        "if we click the sync icon to push changes to github , then we can run `github_open` ...",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\7.png");
      html_style_alternate_monospace_short_multiple(parent, [
        "... and view the change in github :",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\8.png");
    },
    (parent) => {
      html_style_alternate_monospace_short_multiple(parent, [
        "to make a new function , run function_new and provide a function name :",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\9.png");
      html_style_alternate_monospace_short_multiple(parent, [
        "a function is created :",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\10.png");
    },
    (parent) => {
      html_style_alternate_monospace_short_multiple(parent, [
        "if we add a function body ...",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\11.png");
      html_style_alternate_monospace_short_multiple(parent, [
        "... and run `function_auto` then whitespace is automatically fixed",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\15.png");
      html_img_limited_centered(parent, "demo\\2024_05_19\\12.png");
      
      html_style_alternate_monospace_short_multiple(parent, [
        "we can run `greetings` from the command-line - again , easy to test functions",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\13.png");
    },
    (parent) => {
      html_img_limited_centered(parent, "demo\\2024_05_19\\14.png");
      html_img_limited_centered(parent, "demo\\2024_05_19\\16.png");
    },
  ];
  screen = 4;
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
