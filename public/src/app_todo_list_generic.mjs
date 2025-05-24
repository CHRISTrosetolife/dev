import { app_todo_list_inner } from "./app_todo_list_inner.mjs";
import { app_todo_item_choices } from "./app_todo_item_choices.mjs";
import { each } from "./each.mjs";
import { html_hr } from "./html_hr.mjs";
export function app_todo_list_generic(
  context,
  items_filtered,
  refresh,
  index_path,
  items_all,
) {
  app_todo_list_inner(
    context,
    items_filtered,
    refresh,
    index_path,
    middle,
    items_all,
  );
  function middle(context, item) {
    let { root } = context;
    each(properties, function (p) {
      html_hr(root);
      app_todo_item_choices(context, item, p);
    });
  }
}
