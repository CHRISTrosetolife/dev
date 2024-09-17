import { app_index_choices } from "./app_index_choices.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { window_open } from "./window_open.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function app_index() {
  let root = html_style_default_initialize();
  html_clear_scroll_top_centered(root);
  let choices = app_index_choices();
  each(choices, (choice) => {
    html_button_width_full_text_click(
      root,
      object_property_get(choice, "text"),
      () => {
        let url;
        if (object_property_exists(choice, "page")) {
          url = string_combine_multiple([
            object_property_get(choice, "page"),
            ".html",
          ]);
        } else {
          url = object_property_get(choice, "href");
        }
        window_open(url);
      },
    );
  });
}
