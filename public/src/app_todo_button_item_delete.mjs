import { firebase_save_index } from "./firebase_save_index.mjs";
import { list_remove } from "./list_remove.mjs";
import { html_button_delete } from "./html_button_delete.mjs";
export function app_todo_button_item_delete(
  items_all,
  item,
  context,
  index_path,
  refresh,
) {
  let { root } = context;
  html_button_delete(root, "", async () => {
    list_remove(items_all, item);
    await firebase_save_index(context, index_path);
    refresh(context);
  });
}
