import { app_todo_items_object } from "./app_todo_items_object.mjs";
export function app_todo_items(context) {
  let { index } = context;
  return app_todo_items_object(index);
}
