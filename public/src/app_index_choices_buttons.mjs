import { app_extension_html } from "./app_extension_html.mjs";
import { html_button } from "./html_button.mjs";
import { window_open } from "./window_open.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { each } from "./each.mjs";
export function app_index_choices_buttons(root, choices) {
  each(choices, (choice) => {
    let url;
    if (object_property_exists(choice, "page")) {
      url = string_combine_multiple([
        object_property_get(choice, "page"),
        app_extension_html(),
      ]);
    } else {
      url = object_property_get(choice, "href");
    }
    html_button(root, object_property_get(choice, "text"), () => {
      window_open(url);
    });
  });
}
