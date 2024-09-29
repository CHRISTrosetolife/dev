import { app_todo_choices_initialize } from "./app_todo_choices_initialize.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { each } from "./each.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { app_todo_item_choices } from "./app_todo_item_choices.mjs";
import { app_todo_button_back_main } from "./app_todo_button_back_main.mjs";
import { app_todo_index_save } from "./app_todo_index_save.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_todo_item } from "./app_todo_item.mjs";
import { string_is } from "./string_is.mjs";
import { app_todo_items } from "./app_todo_items.mjs";
import { html_hr } from "./html_hr.mjs";
import { list_add } from "./list_add.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_input_width_full_focus } from "./html_input_width_full_focus.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { list_set } from "./list_set.mjs";
export async function app_todo_main(context) {
  let { root } = context;
  html_clear_scroll_top(root);
  let items = app_todo_items(context);
  let completed = "completed";
  let nc = "❌ not completed";
  let completed_choices = [nc, "✅ completed"];
  let mapped = list_map_index(items, (item, ix) => {
    if (string_is(item)) {
      item = app_todo_item(item);
      list_set(items, ix, item);
    }
    app_todo_choices_initialize(item, completed, completed_choices);
    return item;
  });
  let add_dailies = "🌅 add dailies";
  html_button_width_full_text_click(root, add_dailies, () => {});
  let add_item = "➕ add item";
  html_button_width_full_text_click(root, add_item, () => {
    app_todo_button_back_main(context);
    let input = html_input_width_full_focus(root);
    html_button_width_full_text_click(root, add_item, async () => {
      let value = html_value_get(input);
      list_add(items, app_todo_item(value));
      await app_todo_index_save(context);
      await app_todo_main(context);
    });
  });
  html_hr(root);
  let filtered = list_filter_property(mapped, completed, nc);
  each(filtered, (item) => {
    html_button_width_full_text_click(
      root,
      object_property_get(item, "name"),
      () => {
        app_todo_button_back_main(context);
        html_hr(root);
        app_todo_item_choices(context, item, completed, completed_choices);
        html_hr(root);
        let type = "type";
        let type_choices = ["one-time", "daily"];
        app_todo_item_choices(context, item, type, type_choices);
      },
    );
  });
}
