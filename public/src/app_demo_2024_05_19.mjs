import { html_style_alternate_monospace_short_multiple } from "./html_style_alternate_monospace_short_multiple.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { html_img_limited_centered } from "./html_img_limited_centered.mjs";
import { html_buttons_next_previous } from "./html_buttons_next_previous.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { list_get } from "./list_get.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { html_hr } from "./html_hr.mjs";
export function app_demo_2024_05_19() {
  let root = html_style_default_initialize();
  let screen = 0;
  let screens = [
    (parent) => {
      html_style_alternate_monospace_short(
        parent,
        "here is something i have been working on recently :",
      );
      html_hr(parent);
      html_style_alternate_monospace_short(
        parent,
        "`string_combine` is a function that concatenates two strings",
      );
      html_img_limited_centered(parent, "demo\\2024_05_19\\1.png");
      html_style_alternate_monospace_short_multiple(parent, [
        "the first feature is that any function can be ran from the command line using `run.mjs`",
        "just pass in any arguments like `hello` and `' world'` like this:",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\2.png");
      html_style_alternate_monospace_short_multiple(parent, [
        "this speeds up development",
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
      html_style_alternate_monospace_short_multiple(parent, [
        "if we click the sync icon to push changes to github ...",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\6.png");
      
      html_style_alternate_monospace_short_multiple(parent, [
        "... then we can run `github_open` ...",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\7.png");
      html_style_alternate_monospace_short_multiple(parent, [
        "... and view the change in github :",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\8.png");
    },
    (parent) => {
      html_style_alternate_monospace_short_multiple(parent, [
        "to make a new function , run `function_new` and provide a function name :",
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
        "we can run `greetings` from the command-line :",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\13.png");
    },
    (parent) => {
      html_style_alternate_monospace_short_multiple(parent, [
        "sometimes visual studio code does not automatically add `import`s :",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\14.png");
      html_style_alternate_monospace_short_multiple(parent, [
        "if we write a parsable javascript file ...",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\16.png");
      html_style_alternate_monospace_short_multiple(parent, [
        "... and run `function_auto` like before then all missing imports are added",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\15.png");
      html_img_limited_centered(parent, "demo\\2024_05_19\\17.png");
    },
    (parent) => {
      html_style_alternate_monospace_short_multiple(parent, [
        "if we refactor so that an import is no longer needed ...",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\18.png");
      html_style_alternate_monospace_short_multiple(parent, [
        "... and run `function_auto` again ...",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\19.png");
      html_style_alternate_monospace_short_multiple(parent, [
        "... then the `import` is automatically removed",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\20.png");
      html_style_alternate_monospace_short_multiple(parent, [
        "`function_auto` automatically manages all function `import`s",
      ]);
    },
    (parent) => {
      html_style_alternate_monospace_short_multiple(parent, [
        "to search for a function , use `function_search` and provide search terms that match separated by `,`",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\21.png");
    },
    (parent) => {
      html_style_alternate_monospace_short_multiple(parent, [
        "if we refactor greetings to randomly select a greeting word ...",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\22.png");
      html_style_alternate_monospace_short_multiple(parent, [
        "... and run `function_auto` ...",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\23.png");
      html_style_alternate_monospace_short_multiple(parent, [
        "an `import` is automatically added :",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\24.png");
    },
    (parent) => {
      html_style_alternate_monospace_short_multiple(parent, [
        "if we refactor greeting to use multiple functions ...",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\25.png");
      html_img_limited_centered(parent, "demo\\2024_05_19\\26.png");
      html_img_limited_centered(parent, "demo\\2024_05_19\\27.png");
      html_style_alternate_monospace_short_multiple(parent, [
        "... and run `function_auto` ...",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\28.png");
      html_style_alternate_monospace_short_multiple(parent, [
        "... then each function will receive its own file , and all `import`s will be fixed ...",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\29.png");
      html_img_limited_centered(parent, "demo\\2024_05_19\\30.png");
      html_img_limited_centered(parent, "demo\\2024_05_19\\31.png");
      html_style_alternate_monospace_short_multiple(parent, [
        "`function_auto` moves functions in the module scope to their own file and fixes the imports",
      ]);
      html_style_alternate_monospace_short_multiple(parent, [
        "... and it works !",
      ]);
      html_img_limited_centered(parent, "demo\\2024_05_19\\32.png");
      html_hr(parent);
      html_style_alternate_monospace_short_multiple(parent, [
        " congratulations , you made it to the end !",
      ]);
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
