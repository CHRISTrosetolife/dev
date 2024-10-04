import { each_index } from "./each_index.mjs";
import { app_todo_choices_initialize } from "./app_todo_choices_initialize.mjs";
import { each } from "./each.mjs";
import { list_set } from "./list_set.mjs";
import { app_todo_item } from "./app_todo_item.mjs";
import { string_is } from "./string_is.mjs";
import { app_todo_properties } from "./app_todo_properties.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export function app_todo_items(context) {
  let { index } = context;
  let items = object_property_initialize(index, "items", []);
  let properties = app_todo_properties();
  each_index(items, (item, ix) => {
    if (string_is(item)) {
      item = app_todo_item(item);
      list_set(items, ix, item);
    }
    each(properties, (p) => app_todo_choices_initialize(item, p));
    return item;
  });
  return items;
}
