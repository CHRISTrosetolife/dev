import { app_todo_index_save } from "./app_todo_index_save.mjs";
import { object_property_set } from "./object_property_set.mjs";
export async function app_todo_item_set_save(
  item,
  property_name,
  value,
  context,
) {
  object_property_set(item, property_name, value);
  await app_todo_index_save(context);
}
