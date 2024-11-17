import { app_todo_item } from "./app_todo_item.mjs";
import { list_add } from "./list_add.mjs";
export function app_todo_item_add(items, value) {
  list_add(items, app_todo_item(value));
}
