import { each } from "./each.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { window_open } from "./window_open.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { list_add } from "./list_add.mjs";
export function app_index() {
  let root = html_style_default_initialize();
  html_clear_scroll_top_centered(root);
  let choices = [];
  list_add(choices, {
    text: "development tools documentation",
    href: "dev",
  });
  list_add(choices, {
    text: "learn to code ( javascript )",
    href: "learn_code",
  });
  list_add(choices, {
    text: "learn language cebuano",
    href: "ceb",
  });
  list_add(choices, {
    text: "resume",
    href: "resume",
  });
  list_add(choices, {
    text: "bible memorize",
    href: "memorize",
  });
  list_add(choices, {
    text: "game",
    href: "gs",
  });
  list_add(choices, {
    text: "book syntagmatis theologiae christianae",
    href: "yyy8Uu",
  });
  each(list, (item) => {});
  html_button_width_full_text_click(
    root,
    "book syntagmatis theologiae christianae",
    () => {
      window_open("yyy8Uu.html");
    },
  );
}
