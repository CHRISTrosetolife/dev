import { app_todo_button_item_delete } from "./app_todo_button_item_delete.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { emoji_edit_combine } from "./emoji_edit_combine.mjs";
import { app_todo_item_name } from "./app_todo_item_name.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_button_back_main } from "./html_button_back_main.mjs";
import { html_button } from "./html_button.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_hr_each } from "./html_hr_each.mjs";
export function app_todo_list_inner(
  context,
  items_filtered,
  refresh,
  index_path,
  middle,
  items_all,
) {
  let { root } = context;
  html_hr_each(root, items_filtered, function (item) {
    let name = object_property_get(item, "name");
    html_button(root, name, function () {
      html_button_back_main(context, refresh);
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
        index_path,
      );
      middle(context, item);
      html_hr(root);
      app_todo_button_item_delete(
        items_all,
        item,
        context,
        index_path,
        refresh,
      );
    });
  });
}
