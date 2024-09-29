import { app_todo_completed } from "./app_todo_completed.mjs";
import { app_todo_not_completed } from "./app_todo_not_completed.mjs";
import { app_todo_type } from "./app_todo_type.mjs";
import { app_todo_daily } from "./app_todo_daily.mjs";
import { app_todo_list } from "./app_todo_list.mjs";
import { app_todo_choices_initialize } from "./app_todo_choices_initialize.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { each } from "./each.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { app_todo_button_back_main } from "./app_todo_button_back_main.mjs";
import { app_todo_index_save } from "./app_todo_index_save.mjs";
import { app_todo_item } from "./app_todo_item.mjs";
import { string_is } from "./string_is.mjs";
import { app_todo_items } from "./app_todo_items.mjs";
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
  let properties = [
    {
      name: app_todo_completed(),
      choices: [app_todo_not_completed(), "✅ completed"],
    },
    {
      name: app_todo_type(),
      choices: ["one-time", app_todo_daily()],
    },
  ];
  let mapped = list_map_index(items, (item, ix) => {
    if (string_is(item)) {
      item = app_todo_item(item);
      list_set(items, ix, item);
    }
    each(properties, (p) => app_todo_choices_initialize(item, p));
    return item;
  });
  let add_dailies = "🌅 add dailies";
  html_button_width_full_text_click(root, add_dailies, () => {
    let ds = list_filter_property(mapped, app_todo_type(), app_todo_daily());
    each(mapped, (m) => {});
  });
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
  app_todo_list(
    root,
    mapped,
    app_todo_completed(),
    app_todo_not_completed(),
    context,
    properties,
  );
}
