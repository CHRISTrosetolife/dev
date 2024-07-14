import { html_replace_nb } from "./html_replace_nb.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { object_property_get } from "./object_property_get.mjs";
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
    text: "💻 development tools documentation",
    page: "dev",
  });
  list_add(choices, {
    text: string_combine_multiple([
      "🧑‍💻️ learn to code ",
      html_replace_nb("( javascript )"),
    ]),
    page: "learn_code",
  });
  list_add(choices, {
    text: "🎓 learn language cebuano",
    page: "ceb",
  });
  list_add(choices, {
    text: string_combine_multiple([
      "🎓 learn language english ",
      html_replace_nb("( from cebuano )"),
    ]),
    page: "en",
  });
  list_add(choices, {
    text: "📄 resume",
    page: "resume",
  });
  list_add(choices, {
    text: "📖 bible memorize",
    page: "memorize",
  });
  list_add(choices, {
    text: "🎮 game",
    page: "gs",
  });
  list_add(choices, {
    text: "⏺️ record bible",
    page: "record",
  });
  list_add(choices, {
    text: "🎥 audio bible videos",
    page: "record",
  });
  list_add(choices, {
    text: "📙 book syntagmatis theologiae christianae",
    page: "yyy8Uu",
  });
  each(choices, (choice) => {
    html_button_width_full_text_click(
      root,
      object_property_get(choice, "text"),
      () => {
        window_open(
          string_combine_multiple([
            object_property_get(choice, "page"),
            ".html",
          ]),
        );
      },
    );
  });
}
