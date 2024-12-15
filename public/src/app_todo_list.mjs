import { app_todo_item_choices } from "./app_todo_item_choices.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { emoji_edit_combine } from "./emoji_edit_combine.mjs";
import { app_todo_item_name } from "./app_todo_item_name.mjs";
import { html_hr } from "./html_hr.mjs";
import { app_todo_button_back_main } from "./app_todo_button_back_main.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { app_todo_properties } from "./app_todo_properties.mjs";
export function app_todo_list(filtered, context, refresh) {
  let { root } = context;
  let properties = app_todo_properties();
  each(filtered, (item) => {
    let name = object_property_get(item, "name");
    html_button_width_full_text_click(root, name, () => {
      app_todo_button_back_main(context);
      html_hr(root);
      app_todo_item_name(
        context,
        emoji_edit_combine(name),
        emoji_edit_combine("save"),
        name,
        function on_complete(value) {
          object_property_set(item, "name", value);
        },
        function on_save() {
          refresh(context);
        },
      );
      each(properties, (p) => {
        html_hr(root);
        app_todo_item_choices(context, item, p);
      });
    });
  });
}
