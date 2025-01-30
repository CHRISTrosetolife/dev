import { html_hr_each } from "./html_hr_each.mjs";
import { list_remove } from "./list_remove.mjs";
import { firebase_save_index } from "./firebase_save_index.mjs";
import { emoji_delete } from "./emoji_delete.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_todo_item_choices } from "./app_todo_item_choices.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { emoji_edit_combine } from "./emoji_edit_combine.mjs";
import { app_todo_item_name } from "./app_todo_item_name.mjs";
import { html_button_back_main } from "./html_button_back_main.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { html_hr } from "./html_hr.mjs";
export function app_todo_list_generic(
  context,
  filtered,
  refresh,
  properties,
  index_path,
  items_all,
) {
  let { root } = context;
  html_hr_each(root, filtered, (item) => {
    let name = object_property_get(item, "name");
    html_button_width_full_text_click(root, name, () => {
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
      each(properties, (p) => {
        html_hr(root);
        app_todo_item_choices(context, item, p);
      });
      let lambda = async () => {
        list_remove(items_all, item);
        await firebase_save_index(context, index_path);
        refresh(context);
      };
      html_button_width_full_text_click(
        root,
        string_combine_multiple([emoji_delete(), " Delete"]),
        lambda,
      );
    });
  });
}
