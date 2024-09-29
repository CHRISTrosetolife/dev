import { app_todo_properties } from "./app_todo_properties.mjs";
import { app_todo_item_choices } from "./app_todo_item_choices.mjs";
import { app_todo_button_back_main } from "./app_todo_button_back_main.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { each } from "./each.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { html_hr } from "./html_hr.mjs";
export function app_todo_list(root, items, property_name, value, context) {
  let properties = app_todo_properties();
  html_hr(root);
  let filtered = list_filter_property(items, property_name, value);
  each(filtered, (item) => {
    html_button_width_full_text_click(
      root,
      object_property_get(item, "name"),
      () => {
        app_todo_button_back_main(context);
        each(properties, (p) => {
          html_hr(root);
          app_todo_item_choices(context, item, p);
        });
      },
    );
  });
}
