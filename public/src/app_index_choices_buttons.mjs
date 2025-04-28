import { app_extension_html_combine } from "./app_extension_html_combine.mjs";
import { html_button } from "./html_button.mjs";
import { window_open } from "./window_open.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { each } from "./each.mjs";
export function app_index_choices_buttons(root, choices) {
  each(choices, function (choice) {
    let url;
    if (object_property_exists(choice, "app")) {
      url = app_extension_html_combine(object_property_get(choice, "app"));
    } else {
      url = object_property_get(choice, "href");
    }
    html_button(root, object_property_get(choice, "text"), function () {
      window_open(url);
    });
  });
}
